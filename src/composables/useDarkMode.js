import { ref, onMounted } from "vue";

export function useDarkMode() {
  const themeToggleDarkIcon = ref();
  const themeToggleLightIcon = ref();

  const toggleModes = () => {
    themeToggleDarkIcon.value.classList.toggle("hidden");
    themeToggleLightIcon.value.classList.toggle("hidden");

    //   if set via local storage previously
    if (localStorage.getItem("color-theme")) {
      if (localStorage.getItem("color-theme") === "light") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      }

      // if NOT set via local storage previously
    } else {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      }
    }
  };

  onMounted(() => {
    if (
      localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      themeToggleLightIcon.value.classList.remove("hidden");
    } else {
      themeToggleDarkIcon.value.classList.remove("hidden");
    }
  });

  // expose managed state as return value
  return {
    themeToggleDarkIcon,
    themeToggleLightIcon,
    toggleModes,
  };
}
