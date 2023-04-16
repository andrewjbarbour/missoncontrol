import Link from "next/link";

export default function SocialBar() {
  const socialBarIconStyles = "p-1 hover:scale-105";
  const svgProps = {
    height: "30pt",
    width: "30pt",
  };

  return (
    <div className="flex p-5">
      <Link className={socialBarIconStyles} href="mailto:barbouraj@gmail.com">
        <svg
          {...svgProps}
          viewBox="0 0 448 448"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m314.375 144h-180.75l90.375 77.464844zm0 0" />
          <path d="m224 240c-1.910156 0-3.757812-.683594-5.207031-1.929688l-98.792969-84.679687v150.609375h208v-150.609375l-98.792969 84.679687c-1.449219 1.246094-3.296875 1.929688-5.207031 1.929688zm0 0" />
          <path d="m224 0c-123.710938 0-224 100.289062-224 224s100.289062 224 224 224 224-100.289062 224-224c-.140625-123.652344-100.347656-223.859375-224-224zm120 312c0 4.417969-3.582031 8-8 8h-224c-4.417969 0-8-3.582031-8-8v-176c0-4.417969 3.582031-8 8-8h224c4.417969 0 8 3.582031 8 8zm0 0" />
        </svg>
      </Link>
      <Link
        className={socialBarIconStyles}
        href="https://github.com/andrewjbarbour"
      >
        <svg {...svgProps} viewBox="0 0 128 128">
          <g>
            <path d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path>
            <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm-.743-.55M28.93 94.535c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zm-.575-.618M31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm0 0M34.573 101.373c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm0 0M39.073 103.324c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm0 0M44.016 103.685c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm0 0M48.614 102.903c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
          </g>
        </svg>
      </Link>
      <Link
        className={socialBarIconStyles}
        href="https://www.linkedin.com/in/barbouraj/"
      >
        <svg {...svgProps} x="0px" y="0px" viewBox="0 0 36.099999 36">
          <g id="g6">
            <g id="g4">
              <path
                d="M 33.3,0 H 2.7 C 1.2,0 0,1.2 0,2.6 V 33.4 C 0,34.8 1.2,36 2.7,36 h 30.7 c 1.5,0 2.7,-1.2 2.7,-2.6 V 2.6 C 36,1.2 34.8,0 33.3,0 Z M 10.7,30.7 H 5.3 V 13.5 h 5.3 V 30.7 Z M 8,11.1 C 6.3,11.1 4.9,9.7 4.9,8 4.9,6.3 6.3,5 8,5 c 1.7,0 3.1,1.4 3.1,3.1 0,1.7 -1.4,3 -3.1,3 z m 22.7,19.6 h -5.3 v -8.4 c 0,-2 0,-4.6 -2.8,-4.6 -2.8,0 -3.2,2.2 -3.2,4.4 v 8.5 H 14 V 13.5 h 5.1 v 2.3 h 0.1 c 0.7,-1.4 2.5,-2.8 5.1,-2.8 5.4,0 6.4,3.6 6.4,8.2 z"
                id="path2"
              />
            </g>
          </g>
        </svg>
      </Link>
    </div>
  );
}