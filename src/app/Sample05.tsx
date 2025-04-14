export function Orange() {
  return (
    <div className="flex min-h-screen flex-col items-center m-4 justify-center py-2">
      this is orange
    </div>
  );
}

export function Melon() {
  return <div>this is Melon</div>;
}

export function Peach() {
  const colors = ['red', 'blue', 'yellow'];
  const colors2 = colors.map((i) => {
    return i.length;
  });

  return <div>this is peach {colors2}</div>;
}
