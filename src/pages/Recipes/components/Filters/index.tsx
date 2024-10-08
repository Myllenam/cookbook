import { FC, useState, FormEvent } from "react";
import { Button, Select, MenuItem, TextField, Typography, FormControl } from "@mui/material";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import { IRecipeParams } from "src/models";

const categories = ["Almoço", "Bebida", "Café da Manhã", "Doce", "Jantar", "Salgado"];
const prepTimes = [
  { label: "Até 15 min", value: 15 },
  { label: "Até 30 min", value: 30 },
  { label: "Até 60 min", value: 60 },
  { label: "Até 120 min", value: 120 },
];

export const Filters: FC<{ onSetParams: (params: IRecipeParams) => void }> = ({
  onSetParams,
}) => {
  const [search, setSearch] = useState<string>("");
  const [showAdvancedSearch, setShowAdvancedSearch] = useState<boolean>(false);
  const [category, setCategory] = useState<string | string>("");
  const [prepTime, setPrepTime] = useState<string | string>("");
console.log(prepTime)
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const params: IRecipeParams = {
      name: search,
      category: category || "",
      prepTime: prepTime ||"",
    };
    onSetParams(params);
  };

  return (
    <form
      className="flex flex-col gap-[30px] sm:gap-[15px] items-center"
      onSubmit={handleSubmit}
    >
      <TextField
        placeholder="Pesquise uma receita"
        className="w-[350px] sm:w-[300px]"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="flex flex-col gap-[10px]">
        <button
          type="button"
          className="flex gap-[8px] items-center"
          onClick={() => setShowAdvancedSearch(!showAdvancedSearch)}
        >
          {showAdvancedSearch ? (
            <ArrowCircleUpIcon className="text-primary-400" />
          ) : (
            <ArrowCircleDownIcon className="text-primary-400" />
          )}
          <Typography variant="body1" className="text-main-darkBg">
            Busca avançada
          </Typography>
        </button>
        {showAdvancedSearch && (
          <div className="flex gap-[15px]">
            <FormControl className="w-[230px]">
              <Select
                value={category}
                displayEmpty
                onChange={(e) => setCategory(e.target.value)}
                renderValue={(selected) => {
                  if (!selected) {
                    return <Typography>Categoria</Typography>;
                  }
                  return selected;
                }}
              >
                <MenuItem  disabled>
                  <em>Categoria</em>
                </MenuItem>
                {categories.map((cat) => (
                  <MenuItem key={cat} value={cat}>
                    {cat}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl className="w-[230px]">
              <Select
                value={prepTime}
                displayEmpty
                onChange={(e) => setPrepTime(e.target.value)}
                renderValue={(selected) => {
                  if (!selected) {
                    return <Typography>Tempo de Preparo</Typography>;
                  }
                  return selected;
                }}
              >
                <MenuItem  disabled>
                  <em>Tempo de Preparo</em>
                </MenuItem>
                {prepTimes.map((time) => (
                  <MenuItem key={time.value} value={time.value}>
                    {time.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        )}
      </div>
      {(search || showAdvancedSearch) && (
        <Button type="submit" variant="contained" className="!bg-primary-400">
          Buscar
        </Button>
      )}
    </form>
  );
};
