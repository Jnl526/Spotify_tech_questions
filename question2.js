// Question 2 -- decodeString(s): Given an encoded string, return its corresponding decoded string. 

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is repeated exactly k times. Note: k is guaranteed to be a positive integer. 

// For s = "4[ab]", the output should be decodeString(s) = "abababab" 
// For s = "2[b3[a]]", the output should be decodeString(s) = "baaabaaa"

function decodeString(s) {
	let arr = []
	for (let val of s) {
		if (val !== ']') {
			arr.push(val)
		} else {
			let code = ""
			while (arr[arr.length - 1] !== '[') {
				code = arr.pop() + code
			}
			arr.pop()
			let repeat
			if (arr.length > 0 && arr[arr.length - 1].match(/[0-9]+/)) {
				repeat = parseInt(arr.pop())
			}
			k = code.repeat(repeat)
			arr.push(k)
		}
	}
	return k
}

decodeString( "4[ab]") 
decodeString( "2[b3[a]]") 