import { atom, selector } from 'recoil'

export const currentTodoRecoil = atom({
  key: "currentTodoRecoil",
  default: {
    title: '',
    status: '',
    isEditing: false
  }
})

export const isDisabledState = atom({
  key: "isDisabledState",
  default: false
})


export const currentTodoSelector = selector({
  key: 'charCountState', // unique ID (with respect to other atoms/selectors)
  get: ({get}) => {
    const curTodo = get(currentTodoRecoil);
    
    return curTodo;
  },
});