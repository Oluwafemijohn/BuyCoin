import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

const FaceComponent = (props: JSX.IntrinsicAttributes & JSX.IntrinsicClassAttributes<React.Component<SvgProps, any, any>> & Readonly<SvgProps> & Readonly<{ children?: React.ReactNode }>) => (
    <Svg
        width={375}
        height={88}
        fill="none"
        {...props}
    >
        <Path
            stroke="#E4E4E4"
            strokeOpacity={0.6}
            strokeWidth={0.5}
            d="M0 87.75h375"
        />
        <Path
            d="M84.585 43h1.586v-5.855h5.676v-1.406H86.17v-4.424h6.264V29.91h-7.85V43Zm13.25.23c1.712 0 2.607-.92 2.914-1.56h.077V43h1.508v-6.469c0-3.12-2.377-3.477-3.63-3.477-1.483 0-3.17.511-3.938 2.301l1.432.512c.332-.716 1.119-1.483 2.557-1.483 1.387 0 2.071.735 2.071 1.994v.051c0 .729-.742.665-2.531.895-1.822.236-3.81.64-3.81 2.89 0 1.917 1.483 3.016 3.35 3.016Zm.23-1.355c-1.202 0-2.072-.537-2.072-1.585 0-1.15 1.049-1.509 2.225-1.662.64-.077 2.352-.256 2.608-.563v1.381c0 1.227-.972 2.429-2.761 2.429Zm11.011 1.33c2.174 0 3.605-1.33 3.861-3.069h-1.508c-.282 1.074-1.177 1.713-2.353 1.713-1.789 0-2.94-1.482-2.94-3.758 0-2.224 1.176-3.682 2.94-3.682 1.33 0 2.123.818 2.353 1.713h1.508c-.256-1.84-1.815-3.068-3.886-3.068-2.659 0-4.424 2.097-4.424 5.088 0 2.94 1.688 5.063 4.449 5.063Zm10.183 0c1.994 0 3.452-.998 3.912-2.48l-1.458-.41c-.383 1.023-1.272 1.534-2.454 1.534-1.771 0-2.992-1.144-3.062-3.247h7.127v-.639c0-3.656-2.173-4.909-4.219-4.909-2.659 0-4.423 2.097-4.423 5.114s1.739 5.037 4.577 5.037Zm-3.062-5.907c.102-1.527 1.183-2.889 2.908-2.889 1.637 0 2.685 1.227 2.685 2.89h-5.593Zm20.672 1.688c0 1.84-1.406 2.684-2.531 2.684-1.253 0-2.148-.92-2.148-2.352v-6.136h-1.509v6.238c0 2.506 1.33 3.708 3.171 3.708 1.483 0 2.454-.793 2.915-1.79h.102V43h1.508v-9.818h-1.508v5.804Zm5.78-1.892c0-1.713 1.061-2.685 2.506-2.685 1.4 0 2.25.914 2.25 2.455V43h1.508v-6.239c0-2.505-1.336-3.707-3.324-3.707-1.483 0-2.403.665-2.863 1.662h-.128v-1.534h-1.458V43h1.509v-5.906Zm10.529-7.185h-1.508V43h1.508V29.91Zm6.752 13.296c2.659 0 4.449-2.02 4.449-5.063 0-3.068-1.79-5.088-4.449-5.088s-4.449 2.02-4.449 5.088c0 3.043 1.79 5.063 4.449 5.063Zm0-1.356c-2.02 0-2.94-1.738-2.94-3.707 0-1.969.92-3.733 2.94-3.733s2.94 1.764 2.94 3.733-.92 3.707-2.94 3.707Zm10.74 1.356c2.173 0 3.605-1.33 3.861-3.069h-1.509c-.281 1.074-1.176 1.713-2.352 1.713-1.79 0-2.94-1.482-2.94-3.758 0-2.224 1.176-3.682 2.94-3.682 1.33 0 2.122.818 2.352 1.713h1.509c-.256-1.84-1.815-3.068-3.886-3.068-2.66 0-4.424 2.097-4.424 5.088 0 2.94 1.688 5.063 4.449 5.063Zm6.066-.205h1.509v-3.675l1.054-.978L182.975 43h1.917l-4.455-5.625 4.149-4.193h-1.867l-4.295 4.372h-.179v-7.645h-1.509V43Z"
            fill="#151522"
        />
        <Path
            d="M85.057 64h5.114v-.938h-4.057v-7.79h-1.057V64Zm9.272.136c1.773 0 2.967-1.346 2.967-3.375 0-2.045-1.194-3.392-2.967-3.392-1.772 0-2.965 1.347-2.965 3.392 0 2.029 1.193 3.375 2.965 3.375Zm0-.903c-1.346 0-1.96-1.16-1.96-2.472s.614-2.488 1.96-2.488c1.347 0 1.96 1.176 1.96 2.488 0 1.313-.613 2.472-1.96 2.472Zm7.161.903c1.449 0 2.403-.886 2.574-2.045h-1.006c-.188.716-.784 1.142-1.568 1.142-1.193 0-1.96-.989-1.96-2.506 0-1.483.784-2.454 1.96-2.454.886 0 1.414.545 1.568 1.142h1.006c-.171-1.227-1.211-2.046-2.591-2.046-1.773 0-2.95 1.398-2.95 3.392 0 1.96 1.126 3.375 2.967 3.375Zm4.044-.136h1.005v-2.45l.704-.652 2.45 3.102h1.278l-2.97-3.75 2.766-2.795h-1.245l-2.863 2.914h-.12v-5.096h-1.005V64Zm14.538-5.08c-.315-.928-1.022-1.55-2.318-1.55-1.38 0-2.403.783-2.403 1.891 0 .904.537 1.509 1.738 1.79l1.091.256c.661.153.972.469.972.92 0 .563-.597 1.023-1.534 1.023-.823 0-1.338-.354-1.517-1.057l-.955.239c.235 1.112 1.151 1.704 2.489 1.704 1.521 0 2.557-.83 2.557-1.96 0-.912-.571-1.487-1.739-1.773l-.971-.238c-.776-.192-1.125-.452-1.125-.955 0-.562.596-.971 1.397-.971.878 0 1.24.485 1.415.937l.903-.256Zm5.759 2.404c0 1.227-.938 1.79-1.688 1.79-.835 0-1.432-.614-1.432-1.569v-4.09h-1.005v4.159c0 1.67.886 2.471 2.113 2.471.989 0 1.637-.528 1.943-1.193h.069V64h1.005v-6.545h-1.005v3.869Zm2.847 5.13h1.006v-3.46h.085c.222.358.648 1.142 1.909 1.142 1.637 0 2.779-1.312 2.779-3.392 0-2.062-1.142-3.375-2.796-3.375-1.278 0-1.67.784-1.892 1.125h-.119v-1.04h-.972v9Zm.989-5.727c0-1.466.648-2.454 1.875-2.454 1.278 0 1.909 1.074 1.909 2.454 0 1.398-.648 2.506-1.909 2.506-1.21 0-1.875-1.023-1.875-2.506Zm6.324 5.727h1.005v-3.46h.086c.221.358.647 1.142 1.909 1.142 1.636 0 2.778-1.312 2.778-3.392 0-2.062-1.142-3.375-2.795-3.375-1.279 0-1.671.784-1.892 1.125h-.12v-1.04h-.971v9Zm.988-5.727c0-1.466.648-2.454 1.875-2.454 1.279 0 1.909 1.074 1.909 2.454 0 1.398-.647 2.506-1.909 2.506-1.21 0-1.875-1.023-1.875-2.506Zm7.33-5.454h-1.006V64h1.006v-8.727ZM146.151 64h1.006v-6.545h-1.006V64Zm.511-7.636c.392 0 .716-.307.716-.682 0-.375-.324-.682-.716-.682-.392 0-.716.307-.716.682 0 .375.324.682.716.682Zm5.081 7.772c1.329 0 2.301-.664 2.608-1.653l-.972-.273c-.255.682-.848 1.023-1.636 1.023-1.181 0-1.994-.763-2.041-2.165h4.751v-.426c0-2.438-1.449-3.273-2.812-3.273-1.773 0-2.949 1.398-2.949 3.41 0 2.01 1.159 3.357 3.051 3.357Zm-2.041-3.937c.068-1.019.788-1.926 1.939-1.926 1.091 0 1.789.818 1.789 1.926h-3.728ZM155.983 64h1.006v-4.142c0-.886.699-1.534 1.653-1.534.269 0 .546.051.614.068v-1.023a9.719 9.719 0 0 0-.529-.017c-.784 0-1.466.444-1.704 1.091h-.068v-.988h-.972V64Zm9.101-5.08c-.315-.928-1.023-1.55-2.318-1.55-1.381 0-2.403.783-2.403 1.891 0 .904.537 1.509 1.738 1.79l1.091.256c.661.153.972.469.972.92 0 .563-.597 1.023-1.534 1.023-.823 0-1.338-.354-1.517-1.057l-.955.239c.234 1.112 1.151 1.704 2.489 1.704 1.521 0 2.556-.83 2.556-1.96 0-.912-.571-1.487-1.738-1.773l-.972-.238c-.775-.192-1.125-.452-1.125-.955 0-.562.597-.971 1.398-.971.878 0 1.24.485 1.415.937l.903-.256Zm7.667 5.216c1.449 0 2.404-.886 2.574-2.045h-1.005c-.188.716-.784 1.142-1.569 1.142-1.193 0-1.96-.989-1.96-2.506 0-1.483.784-2.454 1.96-2.454.887 0 1.415.545 1.569 1.142h1.005c-.17-1.227-1.21-2.046-2.591-2.046-1.772 0-2.948 1.398-2.948 3.392 0 1.96 1.125 3.375 2.965 3.375Zm4.044-.136h1.006v-4.142c0-.886.699-1.534 1.654-1.534.268 0 .545.051.613.068v-1.023a9.68 9.68 0 0 0-.528-.017c-.784 0-1.466.444-1.705 1.091h-.068v-.988h-.972V64Zm7.01.136c1.33 0 2.302-.664 2.608-1.653l-.971-.273c-.256.682-.848 1.023-1.637 1.023-1.18 0-1.994-.763-2.041-2.165h4.752v-.426c0-2.438-1.449-3.273-2.813-3.273-1.773 0-2.949 1.398-2.949 3.41 0 2.01 1.159 3.357 3.051 3.357Zm-2.041-3.937c.068-1.019.789-1.926 1.939-1.926 1.091 0 1.79.818 1.79 1.926h-3.729Zm8.753 3.937c1.261 0 1.688-.784 1.909-1.142h.119V64h.972v-8.727h-1.006v3.221h-.085c-.221-.34-.614-1.125-1.892-1.125-1.653 0-2.795 1.313-2.795 3.375 0 2.08 1.142 3.392 2.778 3.392Zm.136-.903c-1.261 0-1.909-1.108-1.909-2.506 0-1.38.631-2.454 1.909-2.454 1.228 0 1.875.988 1.875 2.454 0 1.483-.664 2.506-1.875 2.506Zm4.846.767h1.005v-6.545h-1.005V64Zm.511-7.636c.392 0 .716-.307.716-.682 0-.375-.324-.682-.716-.682-.392 0-.716.307-.716.682 0 .375.324.682.716.682Zm5.183 1.09h-1.398v-1.568h-1.006v1.569h-.988v.852h.988v4.09c0 1.143.921 1.688 1.773 1.688.375 0 .614-.068.75-.12l-.204-.903c-.086.018-.222.052-.444.052-.443 0-.869-.137-.869-.989v-3.818h1.398v-.852Zm9.013 3.87c0 1.227-.938 1.79-1.688 1.79-.835 0-1.432-.614-1.432-1.569v-4.09h-1.005v4.159c0 1.67.886 2.471 2.113 2.471.989 0 1.637-.528 1.943-1.193h.069V64h1.005v-6.545h-1.005v3.869Zm7.484-2.404c-.316-.928-1.023-1.55-2.319-1.55-1.38 0-2.403.783-2.403 1.891 0 .904.537 1.509 1.739 1.79l1.091.256c.66.153.971.469.971.92 0 .563-.596 1.023-1.534 1.023-.822 0-1.338-.354-1.517-1.057l-.955.239c.235 1.112 1.151 1.704 2.489 1.704 1.521 0 2.557-.83 2.557-1.96 0-.912-.571-1.487-1.739-1.773l-.971-.238c-.776-.192-1.125-.452-1.125-.955 0-.562.596-.971 1.397-.971.878 0 1.241.485 1.415.937l.904-.256Zm1.633 5.08h1.005v-6.545h-1.005V64Zm.511-7.636c.392 0 .716-.307.716-.682 0-.375-.324-.682-.716-.682-.392 0-.716.307-.716.682 0 .375.324.682.716.682Zm3.342 3.699c0-1.143.708-1.79 1.671-1.79.933 0 1.5.61 1.5 1.636V64h1.005v-4.16c0-1.67-.89-2.47-2.216-2.47-.988 0-1.602.443-1.909 1.107h-.085v-1.022h-.972V64h1.006v-3.938Zm8.656 6.528c1.568 0 2.83-.716 2.83-2.403v-6.733h-.972v1.04h-.102c-.222-.342-.631-1.126-1.909-1.126-1.654 0-2.796 1.313-2.796 3.324 0 2.046 1.193 3.205 2.779 3.205 1.278 0 1.687-.75 1.909-1.108h.085v1.33c0 1.09-.767 1.584-1.824 1.584-1.189 0-1.607-.626-1.875-.988l-.801.562c.409.686 1.214 1.313 2.676 1.313Zm-.034-3.597c-1.261 0-1.909-.954-1.909-2.318 0-1.33.631-2.403 1.909-2.403 1.227 0 1.875.988 1.875 2.403 0 1.449-.665 2.318-1.875 2.318Zm8.727 3.46c.908 0 1.547-.481 1.926-1.5l2.787-7.482-1.099-.017-1.807 5.215h-.068l-1.807-5.215h-1.091l2.421 6.58-.188.51c-.366.998-.818 1.091-1.551.904l-.256.886c.103.051.392.12.733.12Zm8.469-2.318c1.772 0 2.966-1.346 2.966-3.375 0-2.045-1.194-3.392-2.966-3.392-1.773 0-2.966 1.347-2.966 3.392 0 2.029 1.193 3.375 2.966 3.375Zm0-.903c-1.347 0-1.961-1.16-1.961-2.472s.614-2.488 1.961-2.488c1.346 0 1.96 1.176 1.96 2.488 0 1.313-.614 2.472-1.96 2.472Zm8.626-1.91c0 1.228-.938 1.79-1.688 1.79-.835 0-1.432-.613-1.432-1.568v-4.09h-1.005v4.159c0 1.67.886 2.471 2.113 2.471.989 0 1.637-.528 1.943-1.193h.069V64h1.005v-6.545h-1.005v3.869ZM260.467 64h1.006v-4.142c0-.886.699-1.534 1.653-1.534.269 0 .546.051.614.068v-1.023a9.68 9.68 0 0 0-.528-.017c-.784 0-1.466.444-1.705 1.091h-.068v-.988h-.972V64Zm10.755-6.545h-1.466v-.665c0-.648.273-.989.938-.989.289 0 .46.068.562.102l.29-.869c-.154-.068-.46-.17-.955-.17-.937 0-1.841.562-1.841 1.687v.904h-1.056v.852h1.056V64h1.006v-5.693h1.466v-.852Zm3.148 6.698c1.142 0 1.739-.613 1.943-1.04h.051V64h1.006v-4.313c0-2.079-1.585-2.318-2.42-2.318-.989 0-2.114.341-2.625 1.534l.954.341c.222-.477.746-.988 1.705-.988.924 0 1.38.49 1.38 1.33v.033c0 .486-.494.444-1.687.597-1.215.158-2.54.426-2.54 1.926 0 1.278.989 2.011 2.233 2.011Zm.153-.903c-.801 0-1.38-.358-1.38-1.057 0-.767.699-1.005 1.483-1.108.426-.05 1.568-.17 1.738-.375v.92c0 .819-.647 1.62-1.841 1.62Zm7.342.886c1.449 0 2.403-.886 2.574-2.045h-1.006c-.188.716-.784 1.142-1.568 1.142-1.193 0-1.961-.989-1.961-2.506 0-1.483.785-2.454 1.961-2.454.886 0 1.414.545 1.568 1.142h1.006c-.171-1.227-1.211-2.046-2.591-2.046-1.773 0-2.949 1.398-2.949 3.392 0 1.96 1.125 3.375 2.966 3.375Zm6.788 0c1.33 0 2.301-.664 2.608-1.653l-.972-.273c-.255.682-.848 1.023-1.636 1.023-1.18 0-1.994-.763-2.041-2.165h4.751v-.426c0-2.438-1.449-3.273-2.812-3.273-1.773 0-2.949 1.398-2.949 3.41 0 2.01 1.159 3.357 3.051 3.357Zm-2.041-3.937c.068-1.019.788-1.926 1.939-1.926 1.091 0 1.79.818 1.79 1.926h-3.729Z"
            fill="#5B5B5B"
        />
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24.292 38.758a1.042 1.042 0 0 1-1.042-1.042V33.55c0-4.021 3.27-7.292 7.292-7.292h4.166a1.042 1.042 0 0 1 0 2.083h-4.166a5.214 5.214 0 0 0-5.209 5.209v4.166c0 .575-.466 1.042-1.041 1.042Zm33.333 0a1.042 1.042 0 0 1-1.042-1.042V33.55a5.214 5.214 0 0 0-5.208-5.209h-4.167a1.042 1.042 0 0 1 0-2.083h4.167c4.02 0 7.292 3.27 7.292 7.292v4.166c0 .575-.467 1.042-1.042 1.042Zm-22.917 4.167a1.042 1.042 0 0 1-1.041-1.042v-4.167a1.042 1.042 0 0 1 2.083 0v4.167c0 .575-.467 1.042-1.042 1.042Zm12.5 0a1.042 1.042 0 0 1-1.041-1.042v-4.167a1.042 1.042 0 0 1 2.083 0v4.167c0 .575-.467 1.042-1.042 1.042Zm-8.333 4.166a1.042 1.042 0 0 1 0-2.083c.575 0 1.042-.469 1.042-1.042v-6.25a1.042 1.042 0 0 1 2.083 0v6.25a3.129 3.129 0 0 1-3.125 3.125Zm2.083 6.25c-2.358 0-4.358-.804-5.945-2.387a1.045 1.045 0 0 1 0-1.475 1.045 1.045 0 0 1 1.474 0c1.196 1.198 2.659 1.78 4.471 1.78 1.813 0 3.275-.582 4.471-1.78a1.045 1.045 0 0 1 1.475 0 1.045 1.045 0 0 1 0 1.475c-1.587 1.583-3.587 2.387-5.946 2.387Zm-6.25 8.334h-4.166c-4.021 0-7.292-3.271-7.292-7.292v-4.167a1.042 1.042 0 0 1 2.083 0v4.167a5.214 5.214 0 0 0 5.209 5.208h4.166a1.042 1.042 0 0 1 0 2.084Zm16.667 0h-4.167a1.042 1.042 0 0 1 0-2.084h4.167a5.214 5.214 0 0 0 5.208-5.208v-4.167a1.042 1.042 0 0 1 2.084 0v4.167c0 4.02-3.271 7.292-7.292 7.292Z"
            fill="#4B70D6"
        />
    </Svg>
)

export default FaceComponent