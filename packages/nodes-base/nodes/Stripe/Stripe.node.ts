import {
	IExecuteFunctions,
} from 'n8n-core';

import {
	IDataObject,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';

import {
	isEmpty,
} from 'lodash';

import {
	stripeApiRequest,
} from './helpers';

import {
	balanceOperations,
	chargeFields,
	chargeOperations,
	customerFields,
	customerOperations,
	invoiceFields,
	invoiceOperations,
	paymentMethodFields,
	paymentMethodOperations,
	payoutFields,
	payoutOperations,
	priceFields,
	priceOperations,
	productFields,
	productOperations,
	refundFields,
	refundOperations,
	subscriptionFields,
	subscriptionOperations,
} from './descriptions';

export class Stripe implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Stripe',
		name: 'raindrop',
		icon: 'file:stripe.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Consume the Stripe API',
		defaults: {
			name: 'Stripe',
			color: '#6772e5',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'stripeApi',
				required: true,
			},
		],
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				options: [
					{
						name: 'Balance',
						value: 'balance',
					},
					{
						name: 'Charge',
						value: 'charge',
					},
					{
						name: 'Customer',
						value: 'customer',
					},
					{
						name: 'Invoice',
						value: 'invoice',
					},
					{
						name: 'PaymentMethod',
						value: 'paymentMethod',
					},
					{
						name: 'Payout',
						value: 'payout',
					},
					{
						name: 'Product',
						value: 'product',
					},
					{
						name: 'Price',
						value: 'price',
					},
					{
						name: 'Refund',
						value: 'refund',
					},
					{
						name: 'Subscription',
						value: 'subscription',
					},
				],
				default: 'balance',
				description: 'Resource to consume',
			},
			...balanceOperations,
			...chargeOperations,
			...chargeFields,
			...customerOperations,
			...customerFields,
			...invoiceOperations,
			...invoiceFields,
			...paymentMethodOperations,
			...paymentMethodFields,
			...payoutOperations,
			...payoutFields,
			...productOperations,
			...productFields,
			...priceOperations,
			...priceFields,
			...refundOperations,
			...refundFields,
			...subscriptionOperations,
			...subscriptionFields,
		],
	};

	methods = {
		loadOptions: {
			// async getCustomers(this: ILoadOptionsFunctions) {
			// 	return await loadResource.call(this, 'customer');
			// },
		},
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();

		const resource = this.getNodeParameter('resource', 0) as string;
		const operation = this.getNodeParameter('operation', 0) as string;

		let responseData;
		const returnData: IDataObject[] = [];

		for (let i = 0; i < items.length; i++) {

			if (resource === 'balance') {

				// *********************************************************************
				//                             balance
				// *********************************************************************

				// https://stripe.com/docs/api/balance

				if (operation === 'get') {

					// ----------------------------------
					//       balance: get
					// ----------------------------------

					responseData = await stripeApiRequest.call(this, '', '/balance', {}, {});

				}

			} else if (resource === 'raindrop') {


				// *********************************************************************
				//                             charge
				// *********************************************************************

				// https://stripe.com/docs/api/charge

				if (operation === 'create') {

					// ----------------------------------
					//       charge: create
					// ----------------------------------

					const endpoint = '';
					responseData = await stripeApiRequest.call(this, '', endpoint, {}, {});

				} else if (operation === 'delete') {

					// ----------------------------------
					//        charge: delete
					// ----------------------------------

					const endpoint = '';
					responseData = await stripeApiRequest.call(this, '', endpoint, {}, {});

				} else if (operation === 'get') {

					// ----------------------------------
					//        charge: get
					// ----------------------------------

					const endpoint = '';
					responseData = await stripeApiRequest.call(this, '', endpoint, {}, {});

				} else if (operation === 'getAll') {

					// ----------------------------------
					//        charge: getAll
					// ----------------------------------

					const endpoint = '';
					responseData = await stripeApiRequest.call(this, '', endpoint, {}, {});

				} else if (operation === 'update') {

					// ----------------------------------
					//        charge: update
					// ----------------------------------

					const endpoint = '';
					responseData = await stripeApiRequest.call(this, '', endpoint, {}, {});

				}

			} else if (resource === 'customer') {

				// *********************************************************************
				//                             customer
				// *********************************************************************

				// https://stripe.com/docs/api/customer

				if (operation === 'create') {

					// ----------------------------------
					//       customer: create
					// ----------------------------------

					const endpoint = '';
					responseData = await stripeApiRequest.call(this, '', endpoint, {}, {});

				} else if (operation === 'delete') {

					// ----------------------------------
					//        customer: delete
					// ----------------------------------

					const endpoint = '';
					responseData = await stripeApiRequest.call(this, '', endpoint, {}, {});

				} else if (operation === 'get') {

					// ----------------------------------
					//        customer: get
					// ----------------------------------

					const endpoint = '';
					responseData = await stripeApiRequest.call(this, '', endpoint, {}, {});

				} else if (operation === 'getAll') {

					// ----------------------------------
					//        customer: getAll
					// ----------------------------------

					const endpoint = '';
					responseData = await stripeApiRequest.call(this, '', endpoint, {}, {});

				} else if (operation === 'update') {

					// ----------------------------------
					//        customer: update
					// ----------------------------------

					const endpoint = '';
					responseData = await stripeApiRequest.call(this, '', endpoint, {}, {});

				}

			} else if (resource === 'invoice') {


				// *********************************************************************
				//                             paymentMethod
				// *********************************************************************

				// https://stripe.com/docs/api/paymentMethod

				if (operation === 'create') {

					// ----------------------------------
					//       paymentMethod: create
					// ----------------------------------

					const endpoint = '';
					responseData = await stripeApiRequest.call(this, '', endpoint, {}, {});

				} else if (operation === 'delete') {

					// ----------------------------------
					//        paymentMethod: delete
					// ----------------------------------

					const endpoint = '';
					responseData = await stripeApiRequest.call(this, '', endpoint, {}, {});

				} else if (operation === 'get') {

					// ----------------------------------
					//        paymentMethod: get
					// ----------------------------------

					const endpoint = '';
					responseData = await stripeApiRequest.call(this, '', endpoint, {}, {});

				} else if (operation === 'getAll') {

					// ----------------------------------
					//        paymentMethod: getAll
					// ----------------------------------

					const endpoint = '';
					responseData = await stripeApiRequest.call(this, '', endpoint, {}, {});

				} else if (operation === 'update') {

					// ----------------------------------
					//        paymentMethod: update
					// ----------------------------------

					const endpoint = '';
					responseData = await stripeApiRequest.call(this, '', endpoint, {}, {});

				}

			} else if (resource === 'payout') {


				// *********************************************************************
				//                             payout
				// *********************************************************************

				// https://stripe.com/docs/api/payout

				if (operation === 'create') {

					// ----------------------------------
					//       payout: create
					// ----------------------------------

					const endpoint = '';
					responseData = await stripeApiRequest.call(this, '', endpoint, {}, {});

				} else if (operation === 'delete') {

					// ----------------------------------
					//        payout: delete
					// ----------------------------------

					const endpoint = '';
					responseData = await stripeApiRequest.call(this, '', endpoint, {}, {});

				} else if (operation === 'get') {

					// ----------------------------------
					//        payout: get
					// ----------------------------------

					const endpoint = '';
					responseData = await stripeApiRequest.call(this, '', endpoint, {}, {});

				} else if (operation === 'getAll') {

					// ----------------------------------
					//        payout: getAll
					// ----------------------------------

					const endpoint = '';
					responseData = await stripeApiRequest.call(this, '', endpoint, {}, {});

				} else if (operation === 'update') {

					// ----------------------------------
					//        payout: update
					// ----------------------------------

					const endpoint = '';
					responseData = await stripeApiRequest.call(this, '', endpoint, {}, {});

				}

			} else if (resource === 'product') {


				// *********************************************************************
				//                             product
				// *********************************************************************

				// https://stripe.com/docs/api/product

				if (operation === 'create') {

					// ----------------------------------
					//       product: create
					// ----------------------------------

					const endpoint = '';
					responseData = await stripeApiRequest.call(this, '', endpoint, {}, {});

				} else if (operation === 'delete') {

					// ----------------------------------
					//        product: delete
					// ----------------------------------

					const endpoint = '';
					responseData = await stripeApiRequest.call(this, '', endpoint, {}, {});

				} else if (operation === 'get') {

					// ----------------------------------
					//        product: get
					// ----------------------------------

					const endpoint = '';
					responseData = await stripeApiRequest.call(this, '', endpoint, {}, {});

				} else if (operation === 'getAll') {

					// ----------------------------------
					//        product: getAll
					// ----------------------------------

					const endpoint = '';
					responseData = await stripeApiRequest.call(this, '', endpoint, {}, {});

				} else if (operation === 'update') {

					// ----------------------------------
					//        product: update
					// ----------------------------------

					const endpoint = '';
					responseData = await stripeApiRequest.call(this, '', endpoint, {}, {});

				}

			} else if (resource === 'price') {


				// *********************************************************************
				//                             price
				// *********************************************************************

				// https://stripe.com/docs/api/price

				if (operation === 'create') {

					// ----------------------------------
					//       price: create
					// ----------------------------------

					const endpoint = '';
					responseData = await stripeApiRequest.call(this, '', endpoint, {}, {});

				} else if (operation === 'delete') {

					// ----------------------------------
					//        price: delete
					// ----------------------------------

					const endpoint = '';
					responseData = await stripeApiRequest.call(this, '', endpoint, {}, {});

				} else if (operation === 'get') {

					// ----------------------------------
					//        price: get
					// ----------------------------------

					const endpoint = '';
					responseData = await stripeApiRequest.call(this, '', endpoint, {}, {});

				} else if (operation === 'getAll') {

					// ----------------------------------
					//        price: getAll
					// ----------------------------------

					const endpoint = '';
					responseData = await stripeApiRequest.call(this, '', endpoint, {}, {});

				} else if (operation === 'update') {

					// ----------------------------------
					//        price: update
					// ----------------------------------

					const endpoint = '';
					responseData = await stripeApiRequest.call(this, '', endpoint, {}, {});

				}

			} else if (resource === 'refund') {

				// *********************************************************************
				//                             refund
				// *********************************************************************

				// https://stripe.com/docs/api/refund

				if (operation === 'create') {

					// ----------------------------------
					//       refund: create
					// ----------------------------------

					const endpoint = '';
					responseData = await stripeApiRequest.call(this, '', endpoint, {}, {});

				} else if (operation === 'delete') {

					// ----------------------------------
					//        refund: delete
					// ----------------------------------

					const endpoint = '';
					responseData = await stripeApiRequest.call(this, '', endpoint, {}, {});

				} else if (operation === 'get') {

					// ----------------------------------
					//        refund: get
					// ----------------------------------

					const endpoint = '';
					responseData = await stripeApiRequest.call(this, '', endpoint, {}, {});

				} else if (operation === 'getAll') {

					// ----------------------------------
					//        refund: getAll
					// ----------------------------------

					const endpoint = '';
					responseData = await stripeApiRequest.call(this, '', endpoint, {}, {});

				} else if (operation === 'update') {

					// ----------------------------------
					//        refund: update
					// ----------------------------------

					const endpoint = '';
					responseData = await stripeApiRequest.call(this, '', endpoint, {}, {});

				}


			} else if (resource === 'subscription') {

				// *********************************************************************
				//                             subscription
				// *********************************************************************

				// https://stripe.com/docs/api/subscription

				if (operation === 'create') {

					// ----------------------------------
					//       subscription: create
					// ----------------------------------

					const endpoint = '';
					responseData = await stripeApiRequest.call(this, '', endpoint, {}, {});

				} else if (operation === 'delete') {

					// ----------------------------------
					//        subscription: delete
					// ----------------------------------

					const endpoint = '';
					responseData = await stripeApiRequest.call(this, '', endpoint, {}, {});

				} else if (operation === 'get') {

					// ----------------------------------
					//        subscription: get
					// ----------------------------------

					const endpoint = '';
					responseData = await stripeApiRequest.call(this, '', endpoint, {}, {});

				} else if (operation === 'getAll') {

					// ----------------------------------
					//        subscription: getAll
					// ----------------------------------

					const endpoint = '';
					responseData = await stripeApiRequest.call(this, '', endpoint, {}, {});

				} else if (operation === 'update') {

					// ----------------------------------
					//        subscription: update
					// ----------------------------------

					const endpoint = '';
					responseData = await stripeApiRequest.call(this, '', endpoint, {}, {});

				}

			}

			Array.isArray(responseData)
				? returnData.push(...responseData)
				: returnData.push(responseData);
		}

		return [this.helpers.returnJsonArray(returnData)];

	}
}
