export enum Color {
	black = 'black',
	gold = 'gold',
	red = 'red',
	blue = 'blue',
	green = 'green',
	yellow = 'yellow',
}

export interface Hero {
	id: number;
	name: string;
	canFly: boolean;
	color: Color;
}
