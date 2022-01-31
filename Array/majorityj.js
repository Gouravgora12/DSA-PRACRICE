
function findMajority(arr, n)
{
	let maxCount = 0;
	let index = -1; // sentinels
	
	for(let i = 0; i < n; i++)
	{
		let count = 0;
		for(let j = 0; j < n; j++)
		{
			if (arr[i] == arr[j])
				count++;
		}
		if (count > maxCount)
		{
			maxCount = count;
			index = i;
		}
	}
	if (maxCount > n / 2)
		console.log(arr[index]);
	else
		console.log();
}

let arr = [18,6, 1, 15, 19, 9 ,13, 12, 6 ,7 ,2 ,10, 4, 1, 14, 11, 14, 14, 13]
let n = arr.length;
findMajority(arr, n);
