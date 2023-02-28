import { DropDownMenu, DropDownItem } from './DropDown.styled';

export function DropDown() {
  return (
    <>
      <DropDownMenu>
        <DropDownItem>
          <button type="button" onClick={() => console.log('Modal')}>
            Вхід
          </button>
        </DropDownItem>
        <DropDownItem>
          <button type="button" onClick={() => console.log('Modal')}>
            Реєстрація
          </button>
        </DropDownItem>
      </DropDownMenu>
    </>
  );
}
