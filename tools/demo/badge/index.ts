import { DemoSharedBase } from '../utils';
import { setBadge } from '@qlip/nativescript-badge';

export class DemoSharedBadge extends DemoSharedBase {
	testIt() {
		setBadge(5);
	}
}
