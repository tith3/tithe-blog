
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const bland: CustomThemeConfig = {
    name: 'bland',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-family-heading": `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "2px",
		"--theme-rounded-container": "2px",
		"--theme-border-base": "0px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #ffffff 
		"--color-primary-50": "255 255 255", // #ffffff
		"--color-primary-100": "255 255 255", // #ffffff
		"--color-primary-200": "255 255 255", // #ffffff
		"--color-primary-300": "255 255 255", // #ffffff
		"--color-primary-400": "255 255 255", // #ffffff
		"--color-primary-500": "255 255 255", // #ffffff
		"--color-primary-600": "230 230 230", // #e6e6e6
		"--color-primary-700": "191 191 191", // #bfbfbf
		"--color-primary-800": "153 153 153", // #999999
		"--color-primary-900": "125 125 125", // #7d7d7d
		// secondary | #000000 
		"--color-secondary-50": "217 217 217", // #d9d9d9
		"--color-secondary-100": "204 204 204", // #cccccc
		"--color-secondary-200": "191 191 191", // #bfbfbf
		"--color-secondary-300": "153 153 153", // #999999
		"--color-secondary-400": "77 77 77", // #4d4d4d
		"--color-secondary-500": "0 0 0", // #000000
		"--color-secondary-600": "0 0 0", // #000000
		"--color-secondary-700": "0 0 0", // #000000
		"--color-secondary-800": "0 0 0", // #000000
		"--color-secondary-900": "0 0 0", // #000000
		// tertiary | #b5b5b5 
		"--color-tertiary-50": "244 244 244", // #f4f4f4
		"--color-tertiary-100": "240 240 240", // #f0f0f0
		"--color-tertiary-200": "237 237 237", // #ededed
		"--color-tertiary-300": "225 225 225", // #e1e1e1
		"--color-tertiary-400": "203 203 203", // #cbcbcb
		"--color-tertiary-500": "181 181 181", // #b5b5b5
		"--color-tertiary-600": "163 163 163", // #a3a3a3
		"--color-tertiary-700": "136 136 136", // #888888
		"--color-tertiary-800": "109 109 109", // #6d6d6d
		"--color-tertiary-900": "89 89 89", // #595959
		// success | #65a800 
		"--color-success-50": "232 242 217", // #e8f2d9
		"--color-success-100": "224 238 204", // #e0eecc
		"--color-success-200": "217 233 191", // #d9e9bf
		"--color-success-300": "193 220 153", // #c1dc99
		"--color-success-400": "147 194 77", // #93c24d
		"--color-success-500": "101 168 0", // #65a800
		"--color-success-600": "91 151 0", // #5b9700
		"--color-success-700": "76 126 0", // #4c7e00
		"--color-success-800": "61 101 0", // #3d6500
		"--color-success-900": "49 82 0", // #315200
		// warning | #d6a100 
		"--color-warning-50": "249 241 217", // #f9f1d9
		"--color-warning-100": "247 236 204", // #f7eccc
		"--color-warning-200": "245 232 191", // #f5e8bf
		"--color-warning-300": "239 217 153", // #efd999
		"--color-warning-400": "226 189 77", // #e2bd4d
		"--color-warning-500": "214 161 0", // #d6a100
		"--color-warning-600": "193 145 0", // #c19100
		"--color-warning-700": "161 121 0", // #a17900
		"--color-warning-800": "128 97 0", // #806100
		"--color-warning-900": "105 79 0", // #694f00
		// error | #b30000 
		"--color-error-50": "244 217 217", // #f4d9d9
		"--color-error-100": "240 204 204", // #f0cccc
		"--color-error-200": "236 191 191", // #ecbfbf
		"--color-error-300": "225 153 153", // #e19999
		"--color-error-400": "202 77 77", // #ca4d4d
		"--color-error-500": "179 0 0", // #b30000
		"--color-error-600": "161 0 0", // #a10000
		"--color-error-700": "134 0 0", // #860000
		"--color-error-800": "107 0 0", // #6b0000
		"--color-error-900": "88 0 0", // #580000
		// surface | #4f4f4f 
		"--color-surface-50": "229 229 229", // #e5e5e5
		"--color-surface-100": "220 220 220", // #dcdcdc
		"--color-surface-200": "211 211 211", // #d3d3d3
		"--color-surface-300": "185 185 185", // #b9b9b9
		"--color-surface-400": "132 132 132", // #848484
		"--color-surface-500": "79 79 79", // #4f4f4f
		"--color-surface-600": "71 71 71", // #474747
		"--color-surface-700": "59 59 59", // #3b3b3b
		"--color-surface-800": "47 47 47", // #2f2f2f
		"--color-surface-900": "39 39 39", // #272727
		
	}
}