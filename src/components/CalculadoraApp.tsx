
import { Box, Button,Grid,TextField } from "@mui/material"
import { useState } from "react"



export const CalculadoraApp =  () =>{

    const [data, setData] = useState('');

    const  mostrarPantalla = (valor: string)=>{
        setData((valorAnt: string)=> valorAnt + valor);
    }

    const calcularData = () => {
        const result = eval(data);
        setData(result);      
    }

    const clearPantalla = () => {
        setData('')
    }

    return(
        <>
            <Grid item xs={12} container direction={"row"}>
                <Grid item xs={12}>
                    <Grid container > 
                        <Box
                            sx={{
                                width: 300,
                                maxWidth: '100%',
                            }}
                            >
                            <TextField disabled fullWidth value={data} label="0" id="fullWidth" />
                        </Box>
                    </Grid><br />

                    {/* BUTONS */}
                    <Grid container> 
                        <Grid item xs={0.7}>
                            <Button onClick={ () => {mostrarPantalla('7')}} variant="contained">
                                7
                                </Button>
                        </Grid>
                        <Grid item xs={0.7}>
                            <Button onClick={ () => {mostrarPantalla('8')}} variant="contained">
                                8
                                </Button>
                        </Grid>
                        <Grid item xs={0.7}>
                            <Button onClick={ () => {mostrarPantalla('9')}}  variant="contained">
                                9
                                </Button>
                        </Grid>
                        <Grid item xs={0.7}>
                            <Button  onClick={ () => {mostrarPantalla('+')}}  variant="contained">
                                +
                                </Button>
                        </Grid>
                    </Grid><br />
                    <Grid container> 
                        <Grid item xs={0.7}>
                            <Button onClick={ () => {mostrarPantalla('4')}} variant="contained">
                                4
                                </Button>
                        </Grid>
                        <Grid item xs={0.7}>
                            <Button  onClick={ () => {mostrarPantalla('5')}} variant="contained">
                                5
                                </Button>
                        </Grid>
                        <Grid item xs={0.7}>
                            <Button  onClick={ () => {mostrarPantalla('6')}} variant="contained">
                                6
                                </Button>
                        </Grid>
                        <Grid item xs={0.7}>
                            <Button onClick={ () => {mostrarPantalla('-')}} variant="contained">
                                -
                                </Button>
                        </Grid>
                    </Grid><br />
                    <Grid container> 
                        <Grid item xs={0.7}>
                            <Button onClick={ () => {mostrarPantalla('1')}} variant="contained">
                                1
                                </Button>
                        </Grid>
                        <Grid item xs={0.7}>
                            <Button onClick={ () => {mostrarPantalla('2')}} variant="contained">
                                2
                                </Button>
                        </Grid>
                        <Grid item xs={0.7}>
                            <Button onClick={ () => {mostrarPantalla('3')}} variant="contained">
                                3
                                </Button>
                        </Grid>
                        <Grid item xs={0.7}>
                            <Button onClick={calcularData} variant="contained">
                                =
                                </Button>
                        </Grid>
                    </Grid><br />
                    <Grid container> 
                        <Grid item xs={0.7}>
                            <Button onClick={ () => {mostrarPantalla('0')}} variant="contained">
                                0
                                </Button>
                        </Grid>
                        <Grid item xs={0.7}>
                            <Button onClick={ () => {mostrarPantalla('.')}} variant="contained">
                                ,
                                </Button>
                        </Grid>
                        <Grid item xs={0.7}>
                            <Button onClick={clearPantalla}variant="contained">
                                C
                                </Button>
                        </Grid>
                        <Grid item xs={0.7}>
                            <Button onClick={ () => {mostrarPantalla('/')}} variant="contained">
                                /
                                </Button>
                        </Grid>
                    </Grid>
                    </Grid>         
            </Grid>
        
        
            

  
        </>
    )
}
