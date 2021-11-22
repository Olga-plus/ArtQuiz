export function removeEl(nameContainer){
    const container = document.querySelector(nameContainer)  
      while (container.firstChild){
          container.removeChild(container.firstChild);
      }
  }
  
  export default removeEl;