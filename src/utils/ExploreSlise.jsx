import { createSlice } from "@reduxjs/toolkit";

const ExploreSlice = createSlice({
    name: "explore",
    initialState: {
        explorePage: false
    },
    reducers: {
        ToggleExplorePage:(state) => {
            state.explorePage = !state.explorePage
        }

    }

})
export const { ToggleExplorePage } = ExploreSlice.actions;

export default ExploreSlice.reducer;