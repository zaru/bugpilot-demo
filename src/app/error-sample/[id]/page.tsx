import { ClientError } from "@/app/error-sample/[id]/components/ClientError";
import { errorSubmit } from "@/app/error-sample/[id]/errorSubmit";

export default function Page() {
  return (
    <div>
      page
      <div>
        <ClientError />
        <form action={errorSubmit}>
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
}
