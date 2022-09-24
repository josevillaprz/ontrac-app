//  EXERCISE API REQUESTS
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
  await fetch(`/exercise/edit/${id}`, {
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

export const DeleteExercise = async (id) => {
  const response = await fetch(`/exercise/delete/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      token: `${localStorage.getItem("accessToken")}`,
    },
  });
  if (!response.ok) {
    console.log("something went wrong deleteing exercise");
  }
  console.log(response);
};

// WORKOUT API REQUESTS
export const GetUserWorkouts = async (id) => {
  const response = await fetch(`/workout/all/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      token: `${localStorage.getItem("accessToken")}`,
    },
  });
  if (!response.ok) {
    console.log("Something went wrong requesting user workouts");
  }
  const data = await response.json();
  return data;
};

export const CreateWorkout = async (data) => {
  const response = await fetch("/workout/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: `${localStorage.getItem("accessToken")}`,
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    console.log("Something went wrong creating user workout");
  } else {
    console.log("workout created");
  }
};

export const DeleteWorkout = async (id) => {
  const response = await fetch(`/workout/delete/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      token: `${localStorage.getItem("accessToken")}`,
    },
  });
  if (!response.ok) {
    console.log("Something went wrong deleting workout.");
  } else {
    console.log("workout deleted");
  }
};

// Weight api requests

export const CreateWeight = async (pounds) => {
  const response = await fetch("/weight", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem("accessToken"),
    },
    body: JSON.stringify({ pounds }),
  });
  if (!response.ok) {
    console.log("Something went wrong creating a weight");
  } else {
    console.log("weight created");
  }
};

export const GetWeights = async () => {
  const response = await fetch(`/weight/${localStorage.getItem("userId")}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem("accessToken"),
    },
  });
  if (response.status === 204) {
    console.log("No weights stored in the database.");
    return [];
  } else {
    return await response.json();
  }
};
