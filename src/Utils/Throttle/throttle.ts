export type ThrottleFunction<T = any> = (...args: any[]) => void

export function throttle<T>(
	func: ThrottleFunction<T>,
	delay: number
): ThrottleFunction<T> {
	let lastExecTime = 0
	let timeout: NodeJS.Timeout | null = null

	return function (this: T, ...args: any[]) {
		const now = Date.now()
		const timeSinceLastExec = now - lastExecTime

		const execute = () => {
			lastExecTime = now
			func.apply(this, args)
		}

		if (!lastExecTime || timeSinceLastExec >= delay) {
			// If no recent execution or the time since last execution is greater than the delay, execute now.
			execute()
		} else {
			// Otherwise, set a timer to execute after the remaining delay.
			clearTimeout(timeout!)
			timeout = setTimeout(execute, delay - timeSinceLastExec)
		}
	}
}
