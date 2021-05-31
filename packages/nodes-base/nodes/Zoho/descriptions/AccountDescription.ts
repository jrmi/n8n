import {
	INodeProperties,
} from 'n8n-workflow';

import {
	billingAddress,
	makeGetAllFields,
	shippingAddress,
} from './SharedFields';

export const accountOperations = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'account',
				],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
			},
			{
				name: 'Delete',
				value: 'delete',
			},
			{
				name: 'Get',
				value: 'get',
			},
			{
				name: 'Get All',
				value: 'getAll',
			},
			{
				name: 'Update',
				value: 'update',
			},
			{
				name: 'Upsert',
				value: 'upsert',
			},
		],
		default: 'create',
		description: 'Operation to perform',
	},
] as INodeProperties[];

export const accountFields = [
	// ----------------------------------------
	//        account: create + upsert
	// ----------------------------------------
	{
		displayName: 'Account Name',
		name: 'accountName',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'account',
				],
				operation: [
					'create',
					'upsert',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'account',
				],
				operation: [
					'create',
					'upsert',
				],
			},
		},
		options: [
			{
				displayName: 'Account Number',
				name: 'Account_Number',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Account Site',
				name: 'Account_Site',
				type: 'string',
				default: '',
				description: 'Name of the account’s location, e.g. Headquarters or London.',
			},
			{
				displayName: 'Account Type',
				name: 'Account_Type',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Annual Revenue',
				name: 'Annual_Revenue',
				type: 'number',
				default: '',
			},
			billingAddress,
			{
				displayName: 'Contact Details',
				name: 'Contact_Details',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Currency',
				name: 'Currency',
				type: 'string',
				default: '',
				description: 'Symbol of the currency in which revenue is generated.',
			},
			{
				displayName: 'Description',
				name: 'Description',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Employees',
				name: 'Employees',
				type: 'number',
				default: '',
				description: 'Number of employees in the account’s company.',
			},
			{
				displayName: 'Exchange Rate',
				name: 'Exchange_Rate',
				type: 'number',
				default: '',
				description: 'Exchange rate of the default currency to the home currency.',
			},
			{
				displayName: 'Fax',
				name: 'Fax',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Industry',
				name: 'Industry',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Phone',
				name: 'Phone',
				type: 'string',
				default: '',
			},
			shippingAddress,
			{
				displayName: 'Ticker Symbol',
				name: 'Ticker_Symbol',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Website',
				name: 'Website',
				type: 'string',
				default: '',
			},
		],
	},

	// ----------------------------------------
	//             account: delete
	// ----------------------------------------
	{
		displayName: 'Account ID',
		name: 'accountId',
		description: 'ID of the account to delete.',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'account',
				],
				operation: [
					'delete',
				],
			},
		},
	},

	// ----------------------------------------
	//               account: get
	// ----------------------------------------
	{
		displayName: 'Account ID',
		name: 'accountId',
		description: 'ID of the account to retrieve.',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'account',
				],
				operation: [
					'get',
				],
			},
		},
	},

	// ----------------------------------------
	//             account: getAll
	// ----------------------------------------
	...makeGetAllFields('account'),

	// ----------------------------------------
	//             account: update
	// ----------------------------------------
	{
		displayName: 'Account ID',
		name: 'accountId',
		description: 'ID of the account to update.',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'account',
				],
				operation: [
					'update',
				],
			},
		},
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'account',
				],
				operation: [
					'update',
				],
			},
		},
		options: [
			{
				displayName: 'Account Name',
				name: 'Account_Name',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Account Number',
				name: 'Account_Number',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Account Site',
				name: 'Account_Site',
				type: 'string',
				default: '',
				description: 'Name of the account’s location, e.g. Headquarters or London.',
			},
			{
				displayName: 'Account Type',
				name: 'Account_Type',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Annual Revenue',
				name: 'Annual_Revenue',
				type: 'number',
				default: '',
			},
			billingAddress,
			{
				displayName: 'Contact Details',
				name: 'Contact_Details',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Currency',
				name: 'Currency',
				type: 'string',
				default: '',
				description: 'Symbol of the currency in which revenue is generated.',
			},
			{
				displayName: 'Description',
				name: 'Description',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Employees',
				name: 'Employees',
				type: 'number',
				default: '',
				description: 'Number of employees in the account’s company.',
			},
			{
				displayName: 'Exchange Rate',
				name: 'Exchange_Rate',
				type: 'number',
				default: '',
				description: 'Exchange rate of the default currency to the home currency.',
			},
			{
				displayName: 'Fax',
				name: 'Fax',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Industry',
				name: 'Industry',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Phone',
				name: 'Phone',
				type: 'string',
				default: '',
			},
			shippingAddress,
			{
				displayName: 'Ticker Symbol',
				name: 'Ticker_Symbol',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Website',
				name: 'Website',
				type: 'string',
				default: '',
			},
		],
	},
] as INodeProperties[];
