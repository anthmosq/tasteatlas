import Typography from '@mui/material/Typography';

// PENDIENTE: Agregue la interfaz de props si se requiere recibir métricas/totales
interface SummaryProps {
    totalDishes?: number;
}

export default function Summary({ totalDishes }: SummaryProps) {
    return (
        <>
            <Typography variant="h6" component="div" sx={{ mb: 1 }}>
                Resumen
            </Typography>

            {/* PENDIENTE: Renderice los totales o métricas requeridos */}
            <Typography variant="body2" color="text.secondary">
                Total de elementos: {totalDishes ?? 0}
            </Typography>
        </>
    )
}