
export class AppStorageService {
	constructor() { }

	static currentUser(v?: any): any {
		return AppStorageService.getSetItem('current_user', v) || undefined;
	}
	static token(v?: string): any {
		return AppStorageService.getSetItem('token', v) || undefined;
	}
	static getSetItem(k:any, v:any): any {
		if (v) {
			AppStorageService.set(k, v);
		}
		return AppStorageService.get(k);
	}
	static set(key:any, value:any) {
		if (value !== null && typeof value === 'object') {
			value = JSON.stringify(value);
		}
		localStorage.setItem(key, value);
	}
	static get(key:any) {
		let valor = localStorage.getItem(key);
		try {
			valor = JSON.parse(valor!);
		} catch (e) { }
		return valor;
	}
	static clearAll() {
		localStorage.clear();
	}
	static removeItem(key:any) {
		localStorage.removeItem(key);
	}
}
