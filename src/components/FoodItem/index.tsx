import { Stack, Typography, useTheme } from "@mui/material";
import { TableType } from "../../utils/types";
import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import { useEffect, useState } from "react";
import { useFoodContext } from "../../context/FoodProvider";

export const FoodItem = ({ item, key }: { item: TableType; key: number }) => {
  const {totalConsumed, setTotalConsumed, clearTable} = useFoodContext()
  const [selected, setSelected] = useState<boolean>(false);
  const theme = useTheme()
  const handleClick = () => {
    if(!selected) {
      setSelected(prev => !prev)
      setTotalConsumed((prevState) => ({
        Calories: prevState.Calories + item.Calories,
        Added_Sugars: prevState.Added_Sugars + item.Added_Sugars,
        Saturated_Fats: prevState.Saturated_Fats + item.Saturated_Fats,
        Oils: prevState.Oils + item.Oils
      }))
    }
    if(selected && totalConsumed.Calories > 0) {
      setSelected(prev => !prev)
      setTotalConsumed((prevState) => ({
        ...prevState,
        Calories: prevState.Calories - item.Calories,
        Added_Sugars: prevState.Added_Sugars - item.Added_Sugars,
        Saturated_Fats: prevState.Saturated_Fats - item.Saturated_Fats,
        Oils: prevState.Oils + item.Oils
      }))
    }
  }

  const handleName = () => {
    return item.Display_Name.replace(/&amp;/g, "&")
  }

  useEffect(() => {
    setSelected(false)
  }, [clearTable])
  
  return (
    <Stack
      flexDirection="row"
      key={key}
      marginY="1rem"
      padding="0.5rem"
      gap="0.5rem"
      border={`1px solid ${theme.palette.primary.main}`}
      width="80%"
      height="5rem"
      borderRadius="0.25rem"
      onClick={handleClick}
      sx={{ cursor: "pointer" }}
    >
      <Stack width="80%">
        <Typography
          width="fit-content"
          color={theme.palette.common.black}
          fontFamily="Fira Sans,Verdana,sans-serif;"
        >
          {handleName()}
        </Typography>
        <Stack flexDirection="row" mt="0.5rem">
          <Typography
            maxWidth="fit-content"
            color={theme.palette.common.black}
            fontFamily="Fira Sans,Verdana,sans-serif;"
          >
            {"Portion: " +
              item.Portion_Amount +
              " " +
              item.Portion_Display_Name +
              " | " +
              item.Calories +
              " Calories per portion"}
          </Typography>
        </Stack>
      </Stack>
      <Stack alignItems="end" justifyContent="center"  width="20%" marginRight="1rem">
        {selected ? (
          <CheckBoxOutlinedIcon sx={{ color: theme.palette.primary.main }} />
        ) : (
          <CheckBoxOutlineBlankOutlinedIcon sx={{ color: theme.palette.primary.main }} />
        )}
      </Stack>
    </Stack>
  );
};
