let members = [];
let listeners = [];

export const memberStore = {
  addMember(data) {
    members = [...members, data];
    updateChange();
  },
  subscribe(listener) {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  },
  getSnapshot() {
    return members;
  },
};

function updateChange() {
  listeners.forEach((listener) => listener());
}
