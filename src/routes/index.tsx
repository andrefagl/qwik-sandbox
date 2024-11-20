import { component$, useStyles$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Button, buttonVariants } from "~/components/ui/button/button";
import { Modal } from "~/components/ui/modal/modal";

import { useSignal } from "@builder.io/qwik";
import { Content } from "~/components/modal/content";

export default component$(() => {
  const show = useSignal(false);
  useStyles$(`
    body {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }
  `);

  return (
    <>
      <h1 class="mb-8">Sandbox</h1>

      <Modal.Root bind:show={show}>
        <Modal.Trigger class={[buttonVariants({ look: "outline" })]}>
          Open Modal
        </Modal.Trigger>
        <Modal.Panel>
          <Modal.Title>Title</Modal.Title>
          <Modal.Description>Description</Modal.Description>
          <Content />
          <footer>
            <Button look="primary" onClick$={() => (show.value = false)}>
              Save
            </Button>
          </footer>
        </Modal.Panel>
      </Modal.Root>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
