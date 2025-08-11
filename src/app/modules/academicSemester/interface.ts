export type TMonths =
  | "january"
  | "february"
  | "march"
  | "april"
  | "may"
  | "june"
  | "july"
  | "august"
  | "september"
  | "october"
  | "november"
  | "december";
export type TAcademicSemester = {
  name: "summer" | "fall" | "spring";
  year: string;
  code: "01" | "02" | "03";
  startMonth: TMonths;
  endMonth: TMonths;
};
