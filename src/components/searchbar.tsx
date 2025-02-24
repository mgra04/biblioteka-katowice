"use client";

import styles from "./searchbar.module.css";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { searchFormSchema, TSearchForm } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import Button from "./ui/button";

export default function Searchbar() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TSearchForm>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: {
      query: "",
      filter: "title",
    },
  });

  const onSubmit = (formData: TSearchForm) => {
    console.log(formData);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <input
        className={styles.queryInput}
        id="query"
        placeholder="Wpisz frazę, której szukasz"
        {...register("query")}
      />
      {errors.query && <p className="text-red-500">{errors.query.message}</p>}

      <div className={styles.btns}>
        <Controller
          name="filter"
          control={control}
          render={({ field }) => (
            <Select {...field} onValueChange={field.onChange}>
              <SelectTrigger style={{ borderRadius: "0.8rem 0 0 0.8rem" }}>
                <div className={styles.triggerContent}>
                  <SelectValue placeholder="Tytuł" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="title">Tytuł</SelectItem>
                  <SelectItem value="author">Autor</SelectItem>
                  <SelectItem value="publisher">Wydawnictwo</SelectItem>
                  <SelectItem value="keywords">Słowa kluczowe</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        />
        <Button
          style={{ borderRadius: "0 0.8rem 0.8rem 0" }}
          size="lg"
          variant="primary"
          type="submit"
        >
          Szukaj
        </Button>
      </div>
    </form>
  );
}
