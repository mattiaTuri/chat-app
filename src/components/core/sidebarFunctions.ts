export const changeMenu = (id: string) => {
  document.querySelectorAll<HTMLElement>("#menuLink > a").forEach((elem) => {
    elem.style.color = "";
  });

  document.querySelector<HTMLElement>(`#${id}`)!.style.color = "#f8f9fa";
};
