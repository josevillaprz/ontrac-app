export const CreateExercise = async (data) => {
  console.log("creating exercise...", data);
  const response = await fetch("/exercise/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: `${localStorage.getItem("accessToken")}`,
    },
    body: JSON.stringify(data),
  });
  if (response.ok) {
    console.log("exercise created");
  }
};

export const UpdateExercise = async (data, id) => {
  console.log("updating exercise...", data);
  const response = await fetch(`/exercise/edit/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: `${localStorage.getItem("accessToken")}`,
    },
    body: JSON.stringify(data),
  });
};

export const GetAllExercises = async () => {
  const response = await fetch("/exercise/all", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      token: `${localStorage.getItem("accessToken")}`,
    },
  });
  const data = await response.json();
  return data;
};

export const GetExercise = async (id) => {
  const response = await fetch(`/exercise/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      token: `${localStorage.getItem("accessToken")}`,
    },
  });
  const data = await response.json();
  return data;
};
