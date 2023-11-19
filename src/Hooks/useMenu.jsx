import { useEffect, useState } from "react";
import useAxios from "./useAxios";

const useMenu = () => {
  const axios = useAxios();
   const [isLoading, setIsLoading] = useState(true)
   const [menu, setMenu] = useState([]);
   console.log(menu);

  useEffect(() => {
    const fn = async () => {
      const menu = await axios.get("/menus");
      setMenu(menu?.data)
      setIsLoading(false)
    };
    fn()
  }, []);


   return [menu, isLoading]
};

export default useMenu;