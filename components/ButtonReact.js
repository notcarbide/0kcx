import Link from 'next/link'
/* Example with @emotion/react */
import xw, { cx } from 'xwind'

//"react native style"
const styles = {
  button: xw`
    relative
    w-64 min-w-full
    flex justify-center
    py-2 px-4
    text-sm leading-5 font-medium
    rounded-md
    text-white
    bg-indigo-600
    hover[outline-none bg-indigo-700 shadow-2xl2]
    transition duration-150 ease-in-out
  `,
}

const ButtonReact = ({ className, children, ...props }) => (
<Link href={props.href}>
  <button {...props} css={styles.button} className={cx('group', className)}>
    {children}
  </button>
</Link>
)

export default ButtonReact
