export type CategoryIcon = "code" | "chart" | "brain" | "tool";

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  title: string;
  icon: CategoryIcon;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming & Database",
    icon: "code",

    skills: [
      {
        name: "Python",
        icon: "python",
      },
      {
        name: "SQL",
        icon: "sql",
      },
      {
        name: "MySQL",
        icon: "mysql",
      },
      {
        name: "BigQuery",
        icon: "bigquery",
      },
    ],
  },

  {
    title: "Analytics & BI",
    icon: "chart",

    skills: [
      {
        name: "Excel",
        icon: "excel",
      },
      {
        name: "Google Sheets",
        icon: "sheets",
      },
      {
        name: "Looker Studio",
        icon: "looker",
      },
      {
        name: "Tableau",
        icon: "tableau",
      },
      {
        name: "Pandas",
        icon: "pandas",
      },
      {
        name: "Power BI",
        icon: "powerbi",
      },
    ],
  },

  {
    title: "Data Preparation & Machine Learning",
    icon: "brain",

    skills: [
      {
        name: "Pandas",
        icon: "pandas",
      },
      {
        name: "Scikit-learn",
        icon: "sklearn",
      },
      {
        name: "TensorFlow",
        icon: "tensorflow",
      },
      {
        name: "FastText",
        icon: "fasttext",
      },
    ],
  },

  {
    title: "Business Tools",
    icon: "tool",

    skills: [
      {
        name: "Git",
        icon: "git",
      },
      {
        name: "Jupyter Notebook",
        icon: "jupyter",
      },
      {
        name: "Google Colab",
        icon: "colab",
      },
      {
        name: "Jubelio",
        icon: "jubelio",
      },
    ],
  },
];