export function DisabledMessage({ message }: { message: JSX.Element | string }) {
  return (
    <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-lg border-neutral-200 bg-neutral-100 p-2 text-center text-sm shadow-lg dark:bg-gray-800">
      {message}
    </div>
  );
}
