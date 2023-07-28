const digitalClock = document.getElementById('digitalClock');
const quarters = document.querySelector("#quarters");
const plus5 = document.querySelector("#plus5");
const minus10 = document.querySelector("#minus10");

(function clockBeat() {
    const today = new Date();;
    let adjustedDate = new Date(today.getTime() + localStorage.getItem("timeAdjustmentMin")*60*1000)
    let hour = adjustedDate.getHours()
    let min = adjustedDate.getMinutes()
    let sec = adjustedDate.getSeconds();
    min = min < 10 ? ("0" + min) : min;
    sec = sec < 10 ? ("0" + sec) : sec;
    digitalClock.innerHTML = hour + ":" + min + ":" + sec;

    const reducer = (state = [], action) => {
        if (action.type === "SET_QUARTER") {
            return [state.quarters = action.payload];
        }
        return state;
    };

    const store = Redux.createStore(reducer);

    store.subscribe(() => {
        quarters.innerHTML = store.getState();
    });

    if (Number(min) < 15) {
        store.dispatch({ type: "SET_QUARTER", payload: "1st quarter" });
    } else if (Number(min) < 30) {
        store.dispatch({ type: "SET_QUARTER", payload: "2nd quarter" });
    } else if (Number(min) < 45) {
        store.dispatch({ type: "SET_QUARTER", payload: "3rd quarter" });
    } else if (Number(min) < 60) {
        store.dispatch({ type: "SET_QUARTER", payload: "4th quarter" });
    }

    setTimeout(clockBeat, 1000);
})()

plus5.addEventListener("click", () => {
    localStorage.getItem("timeAdjustmentMin") 
    ? localStorage.setItem("timeAdjustmentMin", Number(localStorage.getItem("timeAdjustmentMin")) + 5)
    : localStorage.setItem("timeAdjustmentMin", 5)
});

minus10.addEventListener("click", () => {
    localStorage.getItem("timeAdjustmentMin") 
    ? localStorage.setItem("timeAdjustmentMin", Number(localStorage.getItem("timeAdjustmentMin")) - 10)
    : localStorage.setItem("timeAdjustmentMin", -10)
});