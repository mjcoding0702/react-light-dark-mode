
import { useContext } from 'react';
import checkmarkSvg from './assets/svg/checkmark.svg'
import ThemeContext from './ThemeContext';

export default function CheckboxToggle() {
  const { theme, setTheme } = useContext(ThemeContext);
  const checkboxClassName = 'checkbox-' + theme;

  return (
    <>
      <div className="d-flex align-self-start align-items-center gap-3 mx-5 my-4">
        <label htmlFor="check" className={"d-flex justify-content-center align-items-center border rounded " + checkboxClassName } style={{ width: '34px', height: '34px'}}>
          <img src={checkmarkSvg}/>
        </label>
        <input
          id="check"
          type="checkbox"
          className="d-none"
          checked={theme === 'dark'}
          onChange={(e) => {
            setTheme(e.target.checked ? 'dark' : 'light')
          }}
        />
        <span className="fs-5">Use dark mode</span>
      </div>
    </>
  )
}