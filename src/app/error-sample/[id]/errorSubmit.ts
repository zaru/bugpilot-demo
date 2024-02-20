"use server";

export async function errorSubmit(formData: FormData) {
  const result = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  const data = await result.json();
  return {
    success: data.hoge.piyo
    ,
  };
}
