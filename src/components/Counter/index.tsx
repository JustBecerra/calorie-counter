import { Button, Stack, Typography, useTheme } from "@mui/material";
import { useFoodContext } from "../../context/FoodProvider";

export const Counter = () => {
  const { totalConsumed, handleTable } = useFoodContext();
  const theme = useTheme();

  return (
    <Stack
      width="100%"
      height="auto"
      borderRadius="1rem"
      paddingBottom="2rem"
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
          fontFamily={theme.typography?.lora?.fontFamily}
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
        gap="5%"
      >
        <Stack width="40%" alignItems="center">
          <Typography
            mt="3rem"
            fontFamily={theme.typography?.inter?.fontFamily}
            fontSize={{ xl: "1rem", md: "0.875rem", sm: "0.875rem" }}
            noWrap
          >
            Calories Consumed :
          </Typography>
          <Typography
            mt="1rem"
            fontFamily={theme.typography?.inter?.fontFamily}
            fontSize={{ xl: "1rem", md: "0.875rem", sm: "0.875rem" }}
            noWrap
          >
            {totalConsumed.Calories.toFixed(2)}
          </Typography>
        </Stack>
        <Stack width="40%" alignItems="center">
          <Typography
            mt="3rem"
            fontFamily={theme.typography?.inter?.fontFamily}
            fontSize={{ xl: "1rem", md: "0.875rem", sm: "0.875rem" }}
            noWrap
          >
            Sugar Consumed :
          </Typography>
          <Typography
            mt="1rem"
            fontFamily={theme.typography?.inter?.fontFamily}
          >
            {totalConsumed.Added_Sugars.toFixed(2)}
          </Typography>
        </Stack>
        <Stack width="40%" alignItems="center">
          <Typography
            mt="3rem"
            fontFamily={theme.typography?.inter?.fontFamily}
            fontSize={{ xl: "1rem", md: "0.875rem", sm: "0.875rem" }}
            noWrap
          >
            Satured Fats Consumed :
          </Typography>
          <Typography
            mt="1rem"
            fontFamily={theme.typography?.inter?.fontFamily}
          >
            {totalConsumed.Saturated_Fats.toFixed(2)}
          </Typography>
        </Stack>
        <Stack width="40%" alignItems="center">
          <Typography
            mt="3rem"
            fontFamily={theme.typography?.inter?.fontFamily}
            fontSize={{ xl: "1rem", md: "0.875rem", sm: "0.875rem" }}
            noWrap
          >
            Solid Fats Consumed :
          </Typography>
          <Typography
            mt="1rem"
            fontFamily={theme.typography?.inter?.fontFamily}
          >
            {totalConsumed.Oils.toFixed(2)}
          </Typography>
        </Stack>
      </Stack>
      <Button
        variant="contained"
        sx={{
          marginTop: "2rem",
          width: "30%",
          alignSelf: "center",
        }}
        onClick={handleTable}
      >
        <Typography
          sx={{
            fontFamily: theme.typography?.inter?.fontFamily,
            textTransform: "none",
          }}
          fontSize={{ xl: "1rem", md: "0.875rem", sm: "0.875rem" }}
          flexWrap="nowrap"
        >
          Clear Table
        </Typography>
      </Button>
      <Stack
        width="70%"
        border={`2px solid ${theme.palette.primary.main}`}
        padding="1.5rem"
        borderRadius="0.25rem"
        mt="2rem"
      >
        <Typography
          color={theme.palette.common.black}
          fontFamily={theme.typography?.inter?.fontFamily}
          fontSize={{ xl: "1.25rem", md: "1.125rem", sm: "1.125rem" }}
        >
          Pro Tip:
        </Typography>
        <Typography
          color={theme.palette.common.black}
          fontFamily={theme.typography?.inter?.fontFamily}
          fontSize={{ xl: "1rem", md: "0.875rem", sm: "0.875rem" }}
        >
          If you want to burn fat, you should eat more protein to reduce
          cravings.
        </Typography>
      </Stack>
    </Stack>
  );
};
