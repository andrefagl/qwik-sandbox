import { component$ } from "@builder.io/qwik";

export const Content = component$(() => {
  console.log("sopas modal content");
  return (
    <div>
      <img
        src="https://a0.muscache.com/im/pictures/579b450f-abd9-47c4-ae19-6b9e78f11fba.jpg?im_w=1200"
        width="1200"
        height="826"
        alt="logo"
      />
    </div>
  );
});
