import react, { useContext, useEffect, useState } from "react";
import MainLayout from "../components/Layouts/MainLayout";
import Card from "../components/Elements/Card";
import CardBalance from "../components/Fragments/CardBalance";
import CardGoal from "../components/Fragments/CardGoal";
import CardUpcomingBill from "../components/Fragments/CardUpcomingBill";
import CardRecentTransaction from "../components/Fragments/CardRecentTransaction";
import CardStatistic from "../components/Fragments/CardStatistic";
import CardExpenseBreakdown from "../components/Fragments/CardExpenseBreakdown";
import { transactions, bills, expensesBreakdowns, balances, goals, expensesStatistics } from "../data";
import { billsService, goalService } from "../services/dataService";
import { AuthContext } from "../context/authContext";

function dashboard() {
    const [goals, setGoals] = useState({});
    const [bills2, setBills] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchGoals = async () => {
        try {
        const data = await goalService();
        setGoals(data);
        } catch (err) {
        console.error("Gagal mengambil data goals:", err);
        if (err.status === 401) {
            logout();
        }
        }
    };

     const fetchBills = async () => {
        try {
        const data = await billsService();
        setBills(data);
        } catch (err) {
            console.error("Gagal mengambil data bills:", err);
        if (err.status === 401) {
            logout();
        } 
        } finally {
        setIsLoading(false);
      }
    };

    useEffect(() => {
        fetchGoals();
        fetchBills();
    }, []);
    
    console.log(bills2);
    console.log("bills2 above")

    return(
        <>
            <MainLayout>
                <div className="grid sm:grid-cols-12 gap-6">
                    <div className="sm:col-span-4">
                        <CardBalance data={balances}/>
                    </div>
                    <div className="sm:col-span-4">
                        <CardGoal data={goals}/>
                    </div>
                    <div className="sm:col-span-4">
                        <CardUpcomingBill data={bills2}/>
                    </div>
                    <div className="sm:col-span-4 sm:row-span-2">
                        <CardRecentTransaction data={transactions}/>
                    </div>
                    <div className="sm:col-span-8">
                        <CardStatistic data={expensesStatistics}/>
                    </div>
                    <div className="sm:col-span-8">
                        <CardExpenseBreakdown data={expensesBreakdowns}/>
                    </div>
                </div>
            </MainLayout>
        </>
    );
}

export default dashboard;