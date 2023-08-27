import { Button, Stack, Typography, useTheme } from "@mui/material";
import { useFoodContext } from "../../context/FoodProvider";

export const Counter = () => {
  const { totalConsumed, handleTable } = useFoodContext();
  const theme = useTheme();

  return (
    <Stack
      width="50%"
      height="100%"
      borderRadius="1rem"
      sx={{ backgroundColor: theme.palette.background.default }}
      flexDirection="column"
      alignSelf="start"
      justifyContent="start"
      alignItems="center"
    >
      <Stack alignItems="center" mt="2rem">
        <Typography
          fontSize="2rem"
          fontWeight="600"
          fontFamily="Roboto Condensed,Verdana,sans-serif;"
          color={theme.palette.primary.main}
        >
          Consumption Table
        </Typography>
      </Stack>
      <Stack
        flexWrap="wrap"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
      >
        <Stack width="40%" alignItems="center">
          <Typography mt="3rem">Calories Consumed :</Typography>
          <Typography mt="1rem">{totalConsumed.Calories.toFixed(2)}</Typography>
        </Stack>
        <Stack width="40%" alignItems="center">
          <Typography mt="3rem">Sugar Consumed :</Typography>
          <Typography mt="1rem">
            {totalConsumed.Added_Sugars.toFixed(2)}
          </Typography>
        </Stack>
        <Stack width="40%" alignItems="center">
          <Typography mt="3rem">Satured Fats Consumed :</Typography>
          <Typography mt="1rem">
            {totalConsumed.Saturated_Fats.toFixed(2)}
          </Typography>
        </Stack>
        <Stack width="40%" alignItems="center">
          <Typography mt="3rem">Solid Fats Consumed :</Typography>
          <Typography mt="1rem">{totalConsumed.Oils.toFixed(2)}</Typography>
        </Stack>
      </Stack>
      <Button
        variant="contained"
        sx={{ marginTop: "2rem", width: "30%", alignSelf: "center" }}
        onClick={handleTable}
      >
        Clear Table
      </Button>
      <Stack
        width="70%"
        border={`2px solid ${theme.palette.primary.main}`}
        padding="1.5rem"
        borderRadius="0.25rem"
        mt="2rem"
      >
        <Typography color={theme.palette.common.black}>Pro Tip:</Typography>
        <Typography color={theme.palette.common.black}>
          If you want to burn fat, you should eat more protein to reduce
          cravings
        </Typography>
      </Stack>
    </Stack>
  );
};
