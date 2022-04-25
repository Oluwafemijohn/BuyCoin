import * as React from "react"
import Svg, { Rect, Path, SvgProps } from "react-native-svg"

const SubscribeSvgComponent = (props: JSX.IntrinsicAttributes & JSX.IntrinsicClassAttributes<React.Component<SvgProps, any, any>> & Readonly<SvgProps> & Readonly<{ children?: React.ReactNode }>) => (
    <Svg
        width={81}
        height={34}
        fill="none"
        {...props}
    >
        <Rect width={81} height={34} rx={17} fill="#FCCA48" />
        <Path
            d="M20.154 21.072c-.474 0-.933-.072-1.377-.216-.438-.15-.783-.342-1.035-.576l.333-.702c.24.216.546.393.918.531.378.132.765.198 1.16.198.523 0 .913-.087 1.17-.261.259-.18.388-.417.388-.711a.674.674 0 0 0-.216-.522 1.338 1.338 0 0 0-.522-.315 9.152 9.152 0 0 0-.873-.243 9.297 9.297 0 0 1-1.152-.342 1.962 1.962 0 0 1-.747-.522c-.204-.24-.306-.561-.306-.963 0-.336.087-.639.26-.909.18-.27.45-.486.81-.648.36-.162.808-.243 1.342-.243.372 0 .738.048 1.098.144.36.096.669.234.927.414l-.297.72a3.15 3.15 0 0 0-.846-.378 3.06 3.06 0 0 0-.882-.135c-.51 0-.894.093-1.152.279-.252.186-.378.426-.378.72 0 .216.072.393.216.531.144.132.32.237.53.315.217.072.508.15.874.234.474.114.855.228 1.143.342.288.114.534.288.738.522.21.234.315.549.315.945 0 .33-.09.633-.27.909-.18.27-.453.486-.82.648-.365.156-.815.234-1.35.234Zm8.073-4.842V21h-.819v-.72a1.765 1.765 0 0 1-.693.576 2.16 2.16 0 0 1-.927.198c-.636 0-1.137-.174-1.503-.522-.366-.354-.549-.873-.549-1.557V16.23h.864v2.646c0 .462.111.813.333 1.053.222.234.54.351.954.351.456 0 .816-.138 1.08-.414.264-.276.396-.666.396-1.17V16.23h.864Zm4.174-.045c.462 0 .876.102 1.242.306.366.204.651.489.855.855.21.366.315.789.315 1.269 0 .48-.105.906-.315 1.278a2.17 2.17 0 0 1-.855.855c-.366.204-.78.306-1.242.306-.354 0-.678-.069-.972-.207a1.87 1.87 0 0 1-.729-.603V21h-.828v-6.678h.864v2.628c.192-.252.432-.441.72-.567a2.24 2.24 0 0 1 .945-.198Zm-.072 4.113a1.523 1.523 0 0 0 1.395-.801c.144-.258.216-.552.216-.882 0-.33-.072-.621-.216-.873a1.447 1.447 0 0 0-.576-.594 1.613 1.613 0 0 0-.819-.207c-.3 0-.573.069-.819.207a1.447 1.447 0 0 0-.576.594 1.788 1.788 0 0 0-.207.873c0 .33.07.624.207.882.138.252.33.45.576.594.246.138.52.207.82.207Zm5.046.756c-.39 0-.765-.051-1.125-.153-.36-.108-.642-.243-.846-.405l.36-.684c.21.15.465.27.765.36.3.09.603.135.909.135.756 0 1.134-.216 1.134-.648a.42.42 0 0 0-.153-.342.926.926 0 0 0-.387-.18 6.791 6.791 0 0 0-.648-.135 6.562 6.562 0 0 1-.945-.207 1.453 1.453 0 0 1-.621-.396c-.174-.186-.261-.447-.261-.783 0-.432.18-.777.54-1.035.36-.264.843-.396 1.449-.396.318 0 .636.039.954.117.318.078.579.183.783.315l-.369.684c-.39-.252-.849-.378-1.377-.378-.366 0-.645.06-.837.18-.192.12-.288.279-.288.477 0 .156.054.279.162.369.108.09.24.156.396.198.162.042.387.09.675.144.384.066.693.138.927.216.24.072.444.198.612.378.168.18.252.432.252.756 0 .432-.186.777-.558 1.035-.366.252-.867.378-1.503.378Zm5.22 0c-.486 0-.921-.105-1.305-.315a2.326 2.326 0 0 1-.891-.864 2.463 2.463 0 0 1-.324-1.26c0-.468.108-.885.324-1.251.216-.372.513-.66.89-.864.385-.21.82-.315 1.306-.315.432 0 .816.087 1.152.261.342.174.606.426.792.756l-.657.423a1.468 1.468 0 0 0-.558-.513 1.592 1.592 0 0 0-.738-.171c-.312 0-.594.069-.846.207a1.506 1.506 0 0 0-.585.594 1.788 1.788 0 0 0-.207.873c0 .336.069.633.207.891.144.252.339.447.585.585.252.138.534.207.846.207.27 0 .516-.057.738-.171.222-.114.408-.285.558-.513l.657.414a1.91 1.91 0 0 1-.792.765c-.336.174-.72.261-1.152.261Zm3.89-4.023c.15-.276.372-.486.666-.63.294-.144.651-.216 1.071-.216v.837a1.687 1.687 0 0 0-.198-.009c-.468 0-.837.141-1.107.423-.264.276-.396.672-.396 1.188V21h-.864v-4.77h.828v.801Zm2.802-.801h.864V21h-.864v-4.77Zm.432-.918a.591.591 0 0 1-.423-.162.539.539 0 0 1-.162-.396c0-.156.054-.288.162-.396a.575.575 0 0 1 .423-.171.56.56 0 0 1 .414.162.497.497 0 0 1 .171.387c0 .162-.057.3-.17.414a.56.56 0 0 1-.415.162Zm4.61.873c.463 0 .877.102 1.243.306.366.204.65.489.855.855.21.366.315.789.315 1.269 0 .48-.105.906-.315 1.278a2.17 2.17 0 0 1-.855.855c-.366.204-.78.306-1.242.306-.354 0-.678-.069-.972-.207a1.87 1.87 0 0 1-.73-.603V21h-.827v-6.678h.864v2.628c.192-.252.432-.441.72-.567a2.24 2.24 0 0 1 .945-.198Zm-.071 4.113a1.523 1.523 0 0 0 1.395-.801c.144-.258.216-.552.216-.882 0-.33-.072-.621-.216-.873a1.447 1.447 0 0 0-.576-.594 1.613 1.613 0 0 0-.82-.207c-.3 0-.572.069-.818.207a1.447 1.447 0 0 0-.576.594 1.788 1.788 0 0 0-.207.873c0 .33.069.624.207.882.138.252.33.45.576.594.246.138.519.207.819.207Zm7.989-1.656c0 .066-.006.153-.018.261h-3.87c.054.42.237.759.549 1.017.318.252.71.378 1.179.378.57 0 1.029-.192 1.377-.576l.477.558a2.083 2.083 0 0 1-.81.576 2.77 2.77 0 0 1-1.071.198 2.85 2.85 0 0 1-1.341-.306 2.275 2.275 0 0 1-.91-.873 2.518 2.518 0 0 1-.314-1.26c0-.462.102-.879.306-1.251.21-.372.495-.66.855-.864.366-.21.777-.315 1.233-.315.456 0 .86.105 1.215.315.36.204.639.492.837.864.204.372.306.798.306 1.278Zm-2.358-1.728c-.414 0-.762.126-1.044.378-.276.252-.438.582-.486.99h3.06a1.507 1.507 0 0 0-.495-.981c-.276-.258-.621-.387-1.035-.387Z"
            fill="#000"
        />
    </Svg>
)

export default SubscribeSvgComponent