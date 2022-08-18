import {Subscription} from "./subscription.model";
import {StreamingService} from "./streamingService.model";

export class User {
    constructor(public subscriptions: Subscription[] = []) {
    }

    subscribe(streamingService: StreamingService): Subscription {
        const subscription = new Subscription(streamingService);
        this.subscriptions.push(subscription)
        return subscription
    }
}