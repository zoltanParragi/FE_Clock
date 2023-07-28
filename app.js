const digitalClock = document.getElementById('digitalClock');
const quarters = document.querySelector("#quarters");

(function clockBeat() {
    const today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
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
        store.dispatch({ type: "SET_QUARTER", payload: "3nd quarter" });
    } else if (Number(min) < 60) {
        store.dispatch({ type: "SET_QUARTER", payload: "4th quarter" });
    }

    setTimeout(clockBeat, 1000);
})()