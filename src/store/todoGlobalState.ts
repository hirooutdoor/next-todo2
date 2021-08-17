import { atom } from 'recoil'

export const currentTodoRecoil = atom({
  key: "currentTodoRecoil",
  default: {
    title: '',
    status: '',
    isEditing: false,
  }
})