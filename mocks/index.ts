import closeWithGrace from "close-with-grace";
import { setupServer } from "msw/node";
import { handlers } from "./handlers";
export const server = setupServer(...handlers);

server.listen({
  onUnhandledRequest(request, print) {
    // Print the regular MSW unhandled request warning otherwise.
    print.warning();
  },
});

if (process.env.NODE_ENV !== "test") {
  console.info("🔶 Mock server installed");

  closeWithGrace(() => {
    server.close();
  });
}
