import { CalculadoraApp } from "@/components/CalculadoraApp";
import { Box } from "@mui/material";
import { NextPage } from "next";


const Calculadora: NextPage = () =>{
    return(
        <>

            <Box component="span">
                < CalculadoraApp/>
            </Box>
            
        </>
    )
}

export default Calculadora;