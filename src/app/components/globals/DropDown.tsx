import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

type Props = {};

const DropDown = (props: Props) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="w-full px-4 py-2 text-left">
        <span className="block text-xs text-gray-500">Country code</span>
        <span className="block">Maldives (+960)</span>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          side="bottom"
          align="start"
          sideOffset={8}
          className="z-50 rounded-lg border border-zinc-500 bg-white px-4 py-2 shadow-md"
        >
          <DropdownMenu.Item>United States (+1)</DropdownMenu.Item>
          <DropdownMenu.Item>United Kingdom (+44)</DropdownMenu.Item>
          <DropdownMenu.Item>Canada (+1)</DropdownMenu.Item>
          <DropdownMenu.Item>Australia (+61)</DropdownMenu.Item>
          <DropdownMenu.Item>India (+91)</DropdownMenu.Item>
          <DropdownMenu.Item>Saudi Arabia (+966)</DropdownMenu.Item>
          <DropdownMenu.Item>Maldives (+960)</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default DropDown;
