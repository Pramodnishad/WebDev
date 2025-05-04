import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
    paste: localStorage.getItem('paste')
        ? JSON.parse(localStorage.getItem('paste'))
        : []
}
export const pasteSlice = createSlice({
    name: 'pastes',
    initialState,
    reducers: {
        addToPaste: (state, action) => {
            const paste = action.payload;
            state.paste.push(paste);
            localStorage.setItem('paste', JSON.stringify(state.paste))
            toast("Paste created successfully")

        },
        updateToPaste: (state, action) => {
            const paste = action.payload
            const index = state.paste.findIndex(()=>
            item._id ===paste._id)

            if(index >=0){
                state.paste[index] = paste;
                localStorage.setItem('paste',JSON.stringify(state.paste))
                toast.success("Paste updated")
            }

        },
        resetAllPaste: (state, action) => {

        }
    }
})

export const { addToPaste, updateToPaste, resetAllPaste } = pasteSlice.actions;

export default pasteSlice.reducer