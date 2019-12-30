export const onchange = () => {
return (dispatch) => {
  setTimeout(() => {dispatch(changeName())},2000);
}
}

const changeName = () => {
return {
    type:"ONCLICK"
}
}