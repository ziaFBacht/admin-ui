import react, { useContext, useEffect, useState } from "react";
import MainLayout from "../components/Layouts/MainLayout";
import CardExpenseComparison from "../components/Fragments/CardExpenseComparison";
import { expensesBreakdowns } from "../data";
import { expensesService } from "../services/dataService";
import { AuthContext } from "../context/authContext";
import { goalService } from "../services/dataService";

function expense() {
  const [expensesdata, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    try {
      const data = await expensesService();
      setExpenses(data);
    } catch (err) {
      console.error("Gagal mengambil data expenses:", err);
      if (err.status === 401) {
        logout();
      }
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);
  
  console.log(expensesdata);
  
  return (
    <>
      <MainLayout>
        <div className="sm:col-span-8">
          <CardExpenseComparison data={expensesdata}/>
        </div>
      </MainLayout>
      
    </>
  );
}

export default expense;