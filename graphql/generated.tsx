import gql from 'graphql-tag'
import * as ApolloReactCommon from '@apollo/react-common'
import * as ApolloReactHooks from '@apollo/react-hooks'
export type Maybe<T> = T | null
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string
	String: string
	Boolean: boolean
	Int: number
	Float: number
	/** The Date scalar type is used in operations and types that involve dates. */
	Date: any
	/** The Object scalar type is used in operations and types that involve objects. */
	Object: any
	/** The Any scalar type is used in operations and types that involve any type of value. */
	Any: any
	/** The File scalar type is used in operations and types that involve files. */
	File: any
	/** The Upload scalar type represents a file upload. */
	Upload: any
	/** The Bytes scalar type is used in operations and types that involve base 64 binary data. */
	Bytes: any
}

/** Current access control list of the current object. */
export type Acl = {
	__typename?: 'ACL'
	/** Access control list for users. */
	users?: Maybe<Array<UserAcl>>
	/** Access control list for roles. */
	roles?: Maybe<Array<RoleAcl>>
	/** Public access control list. */
	public?: Maybe<PublicAcl>
}

/** Allow to manage access rights. If not provided object will be publicly readable and writable */
export type AclInput = {
	/** Access control list for users. */
	users?: Maybe<Array<UserAclInput>>
	/** Access control list for roles. */
	roles?: Maybe<Array<RoleAclInput>>
	/** Public access control list. */
	public?: Maybe<PublicAclInput>
}

/** Use Inline Fragment on Array to get results: https://graphql.org/learn/queries/#inline-fragments */
export type ArrayResult = Element | Role | User

/** The ArrayWhereInput input type is used in operations that involve filtering objects by a field of type Array. */
export type ArrayWhereInput = {
	/**
	 * This is the equalTo operator to specify a constraint to select the objects
	 * where the value of a field equals to a specified value.
	 */
	equalTo?: Maybe<Scalars['Any']>
	/**
	 * This is the notEqualTo operator to specify a constraint to select the objects
	 * where the value of a field do not equal to a specified value.
	 */
	notEqualTo?: Maybe<Scalars['Any']>
	/**
	 * This is the lessThan operator to specify a constraint to select the objects
	 * where the value of a field is less than a specified value.
	 */
	lessThan?: Maybe<Scalars['Any']>
	/**
	 * This is the lessThanOrEqualTo operator to specify a constraint to select the
	 * objects where the value of a field is less than or equal to a specified value.
	 */
	lessThanOrEqualTo?: Maybe<Scalars['Any']>
	/**
	 * This is the greaterThan operator to specify a constraint to select the objects
	 * where the value of a field is greater than a specified value.
	 */
	greaterThan?: Maybe<Scalars['Any']>
	/**
	 * This is the greaterThanOrEqualTo operator to specify a constraint to select
	 * the objects where the value of a field is greater than or equal to a specified value.
	 */
	greaterThanOrEqualTo?: Maybe<Scalars['Any']>
	/**
	 * This is the in operator to specify a constraint to select the objects where
	 * the value of a field equals any value in the specified array.
	 */
	in?: Maybe<Array<Maybe<Scalars['Any']>>>
	/**
	 * This is the notIn operator to specify a constraint to select the objects where
	 * the value of a field do not equal any value in the specified array.
	 */
	notIn?: Maybe<Array<Maybe<Scalars['Any']>>>
	/** This is the exists operator to specify a constraint to select the objects where a field exists (or do not exist). */
	exists?: Maybe<Scalars['Boolean']>
	/**
	 * This is the containedBy operator to specify a constraint to select the objects
	 * where the values of an array field is contained by another specified array.
	 */
	containedBy?: Maybe<Array<Maybe<Scalars['Any']>>>
	/**
	 * This is the contains operator to specify a constraint to select the objects
	 * where the values of an array field contain all elements of another specified array.
	 */
	contains?: Maybe<Array<Maybe<Scalars['Any']>>>
	/**
	 * This is the inQueryKey operator to specify a constraint to select the objects
	 * where a field equals to a key in the result of a different query.
	 */
	inQueryKey?: Maybe<SelectInput>
	/**
	 * This is the notInQueryKey operator to specify a constraint to select the
	 * objects where a field do not equal to a key in the result of a different query.
	 */
	notInQueryKey?: Maybe<SelectInput>
}

/** The BooleanWhereInput input type is used in operations that involve filtering objects by a field of type Boolean. */
export type BooleanWhereInput = {
	/**
	 * This is the equalTo operator to specify a constraint to select the objects
	 * where the value of a field equals to a specified value.
	 */
	equalTo?: Maybe<Scalars['Boolean']>
	/**
	 * This is the notEqualTo operator to specify a constraint to select the objects
	 * where the value of a field do not equal to a specified value.
	 */
	notEqualTo?: Maybe<Scalars['Boolean']>
	/** This is the exists operator to specify a constraint to select the objects where a field exists (or do not exist). */
	exists?: Maybe<Scalars['Boolean']>
	/**
	 * This is the inQueryKey operator to specify a constraint to select the objects
	 * where a field equals to a key in the result of a different query.
	 */
	inQueryKey?: Maybe<SelectInput>
	/**
	 * This is the notInQueryKey operator to specify a constraint to select the
	 * objects where a field do not equal to a key in the result of a different query.
	 */
	notInQueryKey?: Maybe<SelectInput>
}

/** The BoxInput type is used to specifiy a box operation on a within geo query. */
export type BoxInput = {
	/** This is the bottom left coordinates of the box. */
	bottomLeft: GeoPointInput
	/** This is the upper right coordinates of the box. */
	upperRight: GeoPointInput
}

/** The BytesWhereInput input type is used in operations that involve filtering objects by a field of type Bytes. */
export type BytesWhereInput = {
	/**
	 * This is the equalTo operator to specify a constraint to select the objects
	 * where the value of a field equals to a specified value.
	 */
	equalTo?: Maybe<Scalars['Bytes']>
	/**
	 * This is the notEqualTo operator to specify a constraint to select the objects
	 * where the value of a field do not equal to a specified value.
	 */
	notEqualTo?: Maybe<Scalars['Bytes']>
	/**
	 * This is the lessThan operator to specify a constraint to select the objects
	 * where the value of a field is less than a specified value.
	 */
	lessThan?: Maybe<Scalars['Bytes']>
	/**
	 * This is the lessThanOrEqualTo operator to specify a constraint to select the
	 * objects where the value of a field is less than or equal to a specified value.
	 */
	lessThanOrEqualTo?: Maybe<Scalars['Bytes']>
	/**
	 * This is the greaterThan operator to specify a constraint to select the objects
	 * where the value of a field is greater than a specified value.
	 */
	greaterThan?: Maybe<Scalars['Bytes']>
	/**
	 * This is the greaterThanOrEqualTo operator to specify a constraint to select
	 * the objects where the value of a field is greater than or equal to a specified value.
	 */
	greaterThanOrEqualTo?: Maybe<Scalars['Bytes']>
	/**
	 * This is the in operator to specify a constraint to select the objects where
	 * the value of a field equals any value in the specified array.
	 */
	in?: Maybe<Array<Maybe<Scalars['Bytes']>>>
	/**
	 * This is the notIn operator to specify a constraint to select the objects where
	 * the value of a field do not equal any value in the specified array.
	 */
	notIn?: Maybe<Array<Maybe<Scalars['Bytes']>>>
	/** This is the exists operator to specify a constraint to select the objects where a field exists (or do not exist). */
	exists?: Maybe<Scalars['Boolean']>
	/**
	 * This is the inQueryKey operator to specify a constraint to select the objects
	 * where a field equals to a key in the result of a different query.
	 */
	inQueryKey?: Maybe<SelectInput>
	/**
	 * This is the notInQueryKey operator to specify a constraint to select the
	 * objects where a field do not equal to a key in the result of a different query.
	 */
	notInQueryKey?: Maybe<SelectInput>
}

/** The CenterSphereInput type is used to specifiy a centerSphere operation on a geoWithin query. */
export type CenterSphereInput = {
	/** This is the center of the sphere. */
	center: GeoPointInput
	/** This is the radius of the sphere. */
	distance: Scalars['Float']
}

/** The Class type is used to return the information about an object class. */
export type Class = {
	__typename?: 'Class'
	/** This is the name of the object class. */
	name: Scalars['String']
	/** These are the schema's fields of the object class. */
	schemaFields: Array<SchemaField>
}

export type CreateClassInput = {
	/** This is the name of the object class. */
	name: Scalars['String']
	/** These are the schema's fields of the object class. */
	schemaFields?: Maybe<SchemaFieldsInput>
	clientMutationId?: Maybe<Scalars['String']>
}

export type CreateClassPayload = {
	__typename?: 'CreateClassPayload'
	/** This is the created class. */
	class: Class
	clientMutationId?: Maybe<Scalars['String']>
}

export type CreateFileInput = {
	/** This is the new file to be created and uploaded. */
	upload: Scalars['Upload']
	clientMutationId?: Maybe<Scalars['String']>
}

export type CreateFilePayload = {
	__typename?: 'CreateFilePayload'
	/** This is the created file info. */
	fileInfo: FileInfo
	clientMutationId?: Maybe<Scalars['String']>
}

/** The CreateRoleFieldsInput input type is used in operations that involve creation of objects in the Role class. */
export type CreateRoleFieldsInput = {
	ACL?: Maybe<AclInput>
	/** This is the object name. */
	name?: Maybe<Scalars['String']>
	/** This is the object users. */
	users?: Maybe<UserRelationInput>
	/** This is the object roles. */
	roles?: Maybe<RoleRelationInput>
}

export type CreateRoleInput = {
	/** These are the fields that will be used to create the new object. */
	fields?: Maybe<CreateRoleFieldsInput>
	clientMutationId?: Maybe<Scalars['String']>
}

export type CreateRolePayload = {
	__typename?: 'CreateRolePayload'
	/** This is the created object. */
	role: Role
	clientMutationId?: Maybe<Scalars['String']>
}

/** The CreateUserFieldsInput input type is used in operations that involve creation of objects in the User class. */
export type CreateUserFieldsInput = {
	ACL?: Maybe<AclInput>
	/** This is the object username. */
	username: Scalars['String']
	/** This is the object password. */
	password: Scalars['String']
	/** This is the object email. */
	email?: Maybe<Scalars['String']>
	/** This is the object emailVerified. */
	emailVerified?: Maybe<Scalars['Boolean']>
	/** This is the object authData. */
	authData?: Maybe<Scalars['Object']>
	/** This is the object firstname. */
	firstname?: Maybe<Scalars['String']>
	/** This is the object lastname. */
	lastname?: Maybe<Scalars['String']>
	/** This is the object picture. */
	picture?: Maybe<Scalars['File']>
}

export type CreateUserInput = {
	/** These are the fields that will be used to create the new object. */
	fields?: Maybe<CreateUserFieldsInput>
	clientMutationId?: Maybe<Scalars['String']>
}

export type CreateUserPayload = {
	__typename?: 'CreateUserPayload'
	/** This is the created object. */
	user: User
	clientMutationId?: Maybe<Scalars['String']>
}

/** The DateWhereInput input type is used in operations that involve filtering objects by a field of type Date. */
export type DateWhereInput = {
	/**
	 * This is the equalTo operator to specify a constraint to select the objects
	 * where the value of a field equals to a specified value.
	 */
	equalTo?: Maybe<Scalars['Date']>
	/**
	 * This is the notEqualTo operator to specify a constraint to select the objects
	 * where the value of a field do not equal to a specified value.
	 */
	notEqualTo?: Maybe<Scalars['Date']>
	/**
	 * This is the lessThan operator to specify a constraint to select the objects
	 * where the value of a field is less than a specified value.
	 */
	lessThan?: Maybe<Scalars['Date']>
	/**
	 * This is the lessThanOrEqualTo operator to specify a constraint to select the
	 * objects where the value of a field is less than or equal to a specified value.
	 */
	lessThanOrEqualTo?: Maybe<Scalars['Date']>
	/**
	 * This is the greaterThan operator to specify a constraint to select the objects
	 * where the value of a field is greater than a specified value.
	 */
	greaterThan?: Maybe<Scalars['Date']>
	/**
	 * This is the greaterThanOrEqualTo operator to specify a constraint to select
	 * the objects where the value of a field is greater than or equal to a specified value.
	 */
	greaterThanOrEqualTo?: Maybe<Scalars['Date']>
	/**
	 * This is the in operator to specify a constraint to select the objects where
	 * the value of a field equals any value in the specified array.
	 */
	in?: Maybe<Array<Maybe<Scalars['Date']>>>
	/**
	 * This is the notIn operator to specify a constraint to select the objects where
	 * the value of a field do not equal any value in the specified array.
	 */
	notIn?: Maybe<Array<Maybe<Scalars['Date']>>>
	/** This is the exists operator to specify a constraint to select the objects where a field exists (or do not exist). */
	exists?: Maybe<Scalars['Boolean']>
	/**
	 * This is the inQueryKey operator to specify a constraint to select the objects
	 * where a field equals to a key in the result of a different query.
	 */
	inQueryKey?: Maybe<SelectInput>
	/**
	 * This is the notInQueryKey operator to specify a constraint to select the
	 * objects where a field do not equal to a key in the result of a different query.
	 */
	notInQueryKey?: Maybe<SelectInput>
}

export type DeleteClassInput = {
	/** This is the name of the object class. */
	name: Scalars['String']
	clientMutationId?: Maybe<Scalars['String']>
}

export type DeleteClassPayload = {
	__typename?: 'DeleteClassPayload'
	/** This is the deleted class. */
	class: Class
	clientMutationId?: Maybe<Scalars['String']>
}

export type DeleteRoleInput = {
	/** This is the object id. You can use either the global or the object id. */
	id: Scalars['ID']
	clientMutationId?: Maybe<Scalars['String']>
}

export type DeleteRolePayload = {
	__typename?: 'DeleteRolePayload'
	/** This is the deleted object. */
	role: Role
	clientMutationId?: Maybe<Scalars['String']>
}

export type DeleteUserInput = {
	/** This is the object id. You can use either the global or the object id. */
	id: Scalars['ID']
	clientMutationId?: Maybe<Scalars['String']>
}

export type DeleteUserPayload = {
	__typename?: 'DeleteUserPayload'
	/** This is the deleted object. */
	user: User
	clientMutationId?: Maybe<Scalars['String']>
}

/** The Element object type is used to return array items' value. */
export type Element = {
	__typename?: 'Element'
	/** Return the value of the element in the array */
	value: Scalars['Any']
}

/** The FileInfo object type is used to return the information about files. */
export type FileInfo = {
	__typename?: 'FileInfo'
	/** This is the file name. */
	name: Scalars['String']
	/** This is the url in which the file can be downloaded. */
	url: Scalars['String']
}

/** The FileWhereInput input type is used in operations that involve filtering objects by a field of type File. */
export type FileWhereInput = {
	/**
	 * This is the equalTo operator to specify a constraint to select the objects
	 * where the value of a field equals to a specified value.
	 */
	equalTo?: Maybe<Scalars['File']>
	/**
	 * This is the notEqualTo operator to specify a constraint to select the objects
	 * where the value of a field do not equal to a specified value.
	 */
	notEqualTo?: Maybe<Scalars['File']>
	/**
	 * This is the lessThan operator to specify a constraint to select the objects
	 * where the value of a field is less than a specified value.
	 */
	lessThan?: Maybe<Scalars['File']>
	/**
	 * This is the lessThanOrEqualTo operator to specify a constraint to select the
	 * objects where the value of a field is less than or equal to a specified value.
	 */
	lessThanOrEqualTo?: Maybe<Scalars['File']>
	/**
	 * This is the greaterThan operator to specify a constraint to select the objects
	 * where the value of a field is greater than a specified value.
	 */
	greaterThan?: Maybe<Scalars['File']>
	/**
	 * This is the greaterThanOrEqualTo operator to specify a constraint to select
	 * the objects where the value of a field is greater than or equal to a specified value.
	 */
	greaterThanOrEqualTo?: Maybe<Scalars['File']>
	/**
	 * This is the in operator to specify a constraint to select the objects where
	 * the value of a field equals any value in the specified array.
	 */
	in?: Maybe<Array<Maybe<Scalars['File']>>>
	/**
	 * This is the notIn operator to specify a constraint to select the objects where
	 * the value of a field do not equal any value in the specified array.
	 */
	notIn?: Maybe<Array<Maybe<Scalars['File']>>>
	/** This is the exists operator to specify a constraint to select the objects where a field exists (or do not exist). */
	exists?: Maybe<Scalars['Boolean']>
	/**
	 * This is the matchesRegex operator to specify a constraint to select the
	 * objects where the value of a field matches a specified regular expression.
	 */
	matchesRegex?: Maybe<Scalars['String']>
	/**
	 * This is the options operator to specify optional flags (such as "i" and "m")
	 * to be added to a matchesRegex operation in the same set of constraints.
	 */
	options?: Maybe<Scalars['String']>
	/**
	 * This is the inQueryKey operator to specify a constraint to select the objects
	 * where a field equals to a key in the result of a different query.
	 */
	inQueryKey?: Maybe<SelectInput>
	/**
	 * This is the notInQueryKey operator to specify a constraint to select the
	 * objects where a field do not equal to a key in the result of a different query.
	 */
	notInQueryKey?: Maybe<SelectInput>
}

/** The GeoIntersectsInput type is used to specify a geoIntersects operation on a constraint. */
export type GeoIntersectsInput = {
	/** This is the point to be specified. */
	point?: Maybe<GeoPointInput>
}

/** The GeoPoint object type is used to return the information about geo point fields. */
export type GeoPoint = {
	__typename?: 'GeoPoint'
	/** This is the latitude. */
	latitude: Scalars['Float']
	/** This is the longitude. */
	longitude: Scalars['Float']
}

/** The GeoPointInput type is used in operations that involve inputting fields of type geo point. */
export type GeoPointInput = {
	/** This is the latitude. */
	latitude: Scalars['Float']
	/** This is the longitude. */
	longitude: Scalars['Float']
}

/** The GeoPointWhereInput input type is used in operations that involve filtering objects by a field of type GeoPoint. */
export type GeoPointWhereInput = {
	/** This is the exists operator to specify a constraint to select the objects where a field exists (or do not exist). */
	exists?: Maybe<Scalars['Boolean']>
	/**
	 * This is the nearSphere operator to specify a constraint to select the objects
	 * where the values of a geo point field is near to another geo point.
	 */
	nearSphere?: Maybe<GeoPointInput>
	/**
	 * This is the maxDistance operator to specify a constraint to select the objects
	 * where the values of a geo point field is at a max distance (in radians) from
	 * the geo point specified in the $nearSphere operator.
	 */
	maxDistance?: Maybe<Scalars['Float']>
	/**
	 * This is the maxDistanceInRadians operator to specify a constraint to select
	 * the objects where the values of a geo point field is at a max distance (in
	 * radians) from the geo point specified in the $nearSphere operator.
	 */
	maxDistanceInRadians?: Maybe<Scalars['Float']>
	/**
	 * This is the maxDistanceInMiles operator to specify a constraint to select the
	 * objects where the values of a geo point field is at a max distance (in miles)
	 * from the geo point specified in the $nearSphere operator.
	 */
	maxDistanceInMiles?: Maybe<Scalars['Float']>
	/**
	 * This is the maxDistanceInKilometers operator to specify a constraint to select
	 * the objects where the values of a geo point field is at a max distance (in
	 * kilometers) from the geo point specified in the $nearSphere operator.
	 */
	maxDistanceInKilometers?: Maybe<Scalars['Float']>
	/**
	 * This is the within operator to specify a constraint to select the objects
	 * where the values of a geo point field is within a specified box.
	 */
	within?: Maybe<WithinInput>
	/**
	 * This is the geoWithin operator to specify a constraint to select the objects
	 * where the values of a geo point field is within a specified polygon or sphere.
	 */
	geoWithin?: Maybe<GeoWithinInput>
}

/** The GeoWithinInput type is used to specify a geoWithin operation on a constraint. */
export type GeoWithinInput = {
	/** This is the polygon to be specified. */
	polygon?: Maybe<Array<GeoPointInput>>
	/** This is the sphere to be specified. */
	centerSphere?: Maybe<CenterSphereInput>
}

/** The IdWhereInput input type is used in operations that involve filtering objects by an id. */
export type IdWhereInput = {
	/**
	 * This is the equalTo operator to specify a constraint to select the objects
	 * where the value of a field equals to a specified value.
	 */
	equalTo?: Maybe<Scalars['ID']>
	/**
	 * This is the notEqualTo operator to specify a constraint to select the objects
	 * where the value of a field do not equal to a specified value.
	 */
	notEqualTo?: Maybe<Scalars['ID']>
	/**
	 * This is the lessThan operator to specify a constraint to select the objects
	 * where the value of a field is less than a specified value.
	 */
	lessThan?: Maybe<Scalars['ID']>
	/**
	 * This is the lessThanOrEqualTo operator to specify a constraint to select the
	 * objects where the value of a field is less than or equal to a specified value.
	 */
	lessThanOrEqualTo?: Maybe<Scalars['ID']>
	/**
	 * This is the greaterThan operator to specify a constraint to select the objects
	 * where the value of a field is greater than a specified value.
	 */
	greaterThan?: Maybe<Scalars['ID']>
	/**
	 * This is the greaterThanOrEqualTo operator to specify a constraint to select
	 * the objects where the value of a field is greater than or equal to a specified value.
	 */
	greaterThanOrEqualTo?: Maybe<Scalars['ID']>
	/**
	 * This is the in operator to specify a constraint to select the objects where
	 * the value of a field equals any value in the specified array.
	 */
	in?: Maybe<Array<Maybe<Scalars['ID']>>>
	/**
	 * This is the notIn operator to specify a constraint to select the objects where
	 * the value of a field do not equal any value in the specified array.
	 */
	notIn?: Maybe<Array<Maybe<Scalars['ID']>>>
	/** This is the exists operator to specify a constraint to select the objects where a field exists (or do not exist). */
	exists?: Maybe<Scalars['Boolean']>
	/**
	 * This is the inQueryKey operator to specify a constraint to select the objects
	 * where a field equals to a key in the result of a different query.
	 */
	inQueryKey?: Maybe<SelectInput>
	/**
	 * This is the notInQueryKey operator to specify a constraint to select the
	 * objects where a field do not equal to a key in the result of a different query.
	 */
	notInQueryKey?: Maybe<SelectInput>
}

/** An entry from an object, i.e., a pair of key and value. */
export type KeyValueInput = {
	/** The key used to retrieve the value of this entry. */
	key: Scalars['String']
	/** The value of the entry. Could be any type of scalar data. */
	value: Scalars['Any']
}

export type LogInInput = {
	/** This is the username used to log in the user. */
	username: Scalars['String']
	/** This is the password used to log in the user. */
	password: Scalars['String']
	clientMutationId?: Maybe<Scalars['String']>
}

export type LogInPayload = {
	__typename?: 'LogInPayload'
	/** This is the existing user that was logged in and returned as a viewer. */
	viewer: Viewer
	clientMutationId?: Maybe<Scalars['String']>
}

export type LogOutInput = {
	clientMutationId?: Maybe<Scalars['String']>
}

export type LogOutPayload = {
	__typename?: 'LogOutPayload'
	/** This is the existing user that was logged out and returned as a viewer. */
	viewer: Viewer
	clientMutationId?: Maybe<Scalars['String']>
}

/** Mutation is the top level type for mutations. */
export type Mutation = {
	__typename?: 'Mutation'
	/** The createRole mutation can be used to create a new object of the Role class. */
	createRole?: Maybe<CreateRolePayload>
	/** The updateRole mutation can be used to update an object of the Role class. */
	updateRole?: Maybe<UpdateRolePayload>
	/** The deleteRole mutation can be used to delete an object of the Role class. */
	deleteRole?: Maybe<DeleteRolePayload>
	/** The createUser mutation can be used to create a new object of the User class. */
	createUser?: Maybe<CreateUserPayload>
	/** The updateUser mutation can be used to update an object of the User class. */
	updateUser?: Maybe<UpdateUserPayload>
	/** The deleteUser mutation can be used to delete an object of the User class. */
	deleteUser?: Maybe<DeleteUserPayload>
	/** The createFile mutation can be used to create and upload a new file. */
	createFile?: Maybe<CreateFilePayload>
	/** The signUp mutation can be used to create and sign up a new user. */
	signUp?: Maybe<SignUpPayload>
	/** The logIn mutation can be used to log in an existing user. */
	logIn?: Maybe<LogInPayload>
	/** The logOut mutation can be used to log out an existing user. */
	logOut?: Maybe<LogOutPayload>
	/** The resetPassword mutation can be used to reset the password of an existing user. */
	resetPassword?: Maybe<ResetPasswordPayload>
	/** The sendVerificationEmail mutation can be used to send the verification email again. */
	sendVerificationEmail?: Maybe<SendVerificationEmailPayload>
	/** The createClass mutation can be used to create the schema for a new object class. */
	createClass?: Maybe<CreateClassPayload>
	/** The updateClass mutation can be used to update the schema for an existing object class. */
	updateClass?: Maybe<UpdateClassPayload>
	/** The deleteClass mutation can be used to delete an existing object class. */
	deleteClass?: Maybe<DeleteClassPayload>
}

/** Mutation is the top level type for mutations. */
export type MutationCreateRoleArgs = {
	input: CreateRoleInput
}

/** Mutation is the top level type for mutations. */
export type MutationUpdateRoleArgs = {
	input: UpdateRoleInput
}

/** Mutation is the top level type for mutations. */
export type MutationDeleteRoleArgs = {
	input: DeleteRoleInput
}

/** Mutation is the top level type for mutations. */
export type MutationCreateUserArgs = {
	input: CreateUserInput
}

/** Mutation is the top level type for mutations. */
export type MutationUpdateUserArgs = {
	input: UpdateUserInput
}

/** Mutation is the top level type for mutations. */
export type MutationDeleteUserArgs = {
	input: DeleteUserInput
}

/** Mutation is the top level type for mutations. */
export type MutationCreateFileArgs = {
	input: CreateFileInput
}

/** Mutation is the top level type for mutations. */
export type MutationSignUpArgs = {
	input: SignUpInput
}

/** Mutation is the top level type for mutations. */
export type MutationLogInArgs = {
	input: LogInInput
}

/** Mutation is the top level type for mutations. */
export type MutationLogOutArgs = {
	input: LogOutInput
}

/** Mutation is the top level type for mutations. */
export type MutationResetPasswordArgs = {
	input: ResetPasswordInput
}

/** Mutation is the top level type for mutations. */
export type MutationSendVerificationEmailArgs = {
	input: SendVerificationEmailInput
}

/** Mutation is the top level type for mutations. */
export type MutationCreateClassArgs = {
	input: CreateClassInput
}

/** Mutation is the top level type for mutations. */
export type MutationUpdateClassArgs = {
	input: UpdateClassInput
}

/** Mutation is the top level type for mutations. */
export type MutationDeleteClassArgs = {
	input: DeleteClassInput
}

/** An object with an ID */
export type Node = {
	/** The id of the object. */
	id: Scalars['ID']
}

/** The NumberWhereInput input type is used in operations that involve filtering objects by a field of type Number. */
export type NumberWhereInput = {
	/**
	 * This is the equalTo operator to specify a constraint to select the objects
	 * where the value of a field equals to a specified value.
	 */
	equalTo?: Maybe<Scalars['Float']>
	/**
	 * This is the notEqualTo operator to specify a constraint to select the objects
	 * where the value of a field do not equal to a specified value.
	 */
	notEqualTo?: Maybe<Scalars['Float']>
	/**
	 * This is the lessThan operator to specify a constraint to select the objects
	 * where the value of a field is less than a specified value.
	 */
	lessThan?: Maybe<Scalars['Float']>
	/**
	 * This is the lessThanOrEqualTo operator to specify a constraint to select the
	 * objects where the value of a field is less than or equal to a specified value.
	 */
	lessThanOrEqualTo?: Maybe<Scalars['Float']>
	/**
	 * This is the greaterThan operator to specify a constraint to select the objects
	 * where the value of a field is greater than a specified value.
	 */
	greaterThan?: Maybe<Scalars['Float']>
	/**
	 * This is the greaterThanOrEqualTo operator to specify a constraint to select
	 * the objects where the value of a field is greater than or equal to a specified value.
	 */
	greaterThanOrEqualTo?: Maybe<Scalars['Float']>
	/**
	 * This is the in operator to specify a constraint to select the objects where
	 * the value of a field equals any value in the specified array.
	 */
	in?: Maybe<Array<Maybe<Scalars['Float']>>>
	/**
	 * This is the notIn operator to specify a constraint to select the objects where
	 * the value of a field do not equal any value in the specified array.
	 */
	notIn?: Maybe<Array<Maybe<Scalars['Float']>>>
	/** This is the exists operator to specify a constraint to select the objects where a field exists (or do not exist). */
	exists?: Maybe<Scalars['Boolean']>
	/**
	 * This is the inQueryKey operator to specify a constraint to select the objects
	 * where a field equals to a key in the result of a different query.
	 */
	inQueryKey?: Maybe<SelectInput>
	/**
	 * This is the notInQueryKey operator to specify a constraint to select the
	 * objects where a field do not equal to a key in the result of a different query.
	 */
	notInQueryKey?: Maybe<SelectInput>
}

/** The ObjectWhereInput input type is used in operations that involve filtering result by a field of type Object. */
export type ObjectWhereInput = {
	/**
	 * This is the equalTo operator to specify a constraint to select the objects
	 * where the value of a field equals to a specified value.
	 */
	equalTo?: Maybe<KeyValueInput>
	/**
	 * This is the notEqualTo operator to specify a constraint to select the objects
	 * where the value of a field do not equal to a specified value.
	 */
	notEqualTo?: Maybe<KeyValueInput>
	/**
	 * This is the in operator to specify a constraint to select the objects where
	 * the value of a field equals any value in the specified array.
	 */
	in?: Maybe<Array<Maybe<KeyValueInput>>>
	/**
	 * This is the notIn operator to specify a constraint to select the objects where
	 * the value of a field do not equal any value in the specified array.
	 */
	notIn?: Maybe<Array<Maybe<KeyValueInput>>>
	/**
	 * This is the lessThan operator to specify a constraint to select the objects
	 * where the value of a field is less than a specified value.
	 */
	lessThan?: Maybe<KeyValueInput>
	/**
	 * This is the lessThanOrEqualTo operator to specify a constraint to select the
	 * objects where the value of a field is less than or equal to a specified value.
	 */
	lessThanOrEqualTo?: Maybe<KeyValueInput>
	/**
	 * This is the greaterThan operator to specify a constraint to select the objects
	 * where the value of a field is greater than a specified value.
	 */
	greaterThan?: Maybe<KeyValueInput>
	/**
	 * This is the greaterThanOrEqualTo operator to specify a constraint to select
	 * the objects where the value of a field is greater than or equal to a specified value.
	 */
	greaterThanOrEqualTo?: Maybe<KeyValueInput>
	/** This is the exists operator to specify a constraint to select the objects where a field exists (or do not exist). */
	exists?: Maybe<Scalars['Boolean']>
	/**
	 * This is the inQueryKey operator to specify a constraint to select the objects
	 * where a field equals to a key in the result of a different query.
	 */
	inQueryKey?: Maybe<SelectInput>
	/**
	 * This is the notInQueryKey operator to specify a constraint to select the
	 * objects where a field do not equal to a key in the result of a different query.
	 */
	notInQueryKey?: Maybe<SelectInput>
}

/** Information about pagination in a connection. */
export type PageInfo = {
	__typename?: 'PageInfo'
	/** When paginating forwards, are there more items? */
	hasNextPage: Scalars['Boolean']
	/** When paginating backwards, are there more items? */
	hasPreviousPage: Scalars['Boolean']
	/** When paginating backwards, the cursor to continue. */
	startCursor?: Maybe<Scalars['String']>
	/** When paginating forwards, the cursor to continue. */
	endCursor?: Maybe<Scalars['String']>
}

/** The ParseObject interface type is used as a base type for the auto generated object types. */
export type ParseObject = {
	/** This is the object id. */
	objectId: Scalars['ID']
	/** This is the date in which the object was created. */
	createdAt: Scalars['Date']
	/** This is the date in which the object was las updated. */
	updatedAt: Scalars['Date']
	ACL: Acl
}

/** The PointerFieldInput is used to specify a field of type pointer for an object class schema. */
export type PointerFieldInput = {
	/** This is the field name. */
	name: Scalars['String']
	/** This is the name of the target class for the field. */
	targetClassName: Scalars['String']
}

/** The PolygonWhereInput input type is used in operations that involve filtering objects by a field of type Polygon. */
export type PolygonWhereInput = {
	/** This is the exists operator to specify a constraint to select the objects where a field exists (or do not exist). */
	exists?: Maybe<Scalars['Boolean']>
	/**
	 * This is the geoIntersects operator to specify a constraint to select the
	 * objects where the values of a polygon field intersect a specified point.
	 */
	geoIntersects?: Maybe<GeoIntersectsInput>
}

/** Allow to manage public rights. */
export type PublicAcl = {
	__typename?: 'PublicACL'
	/** Allow anyone to read the current object. */
	read?: Maybe<Scalars['Boolean']>
	/** Allow anyone to write on the current object. */
	write?: Maybe<Scalars['Boolean']>
}

/** Allow to manage public rights. */
export type PublicAclInput = {
	/** Allow anyone to read the current object. */
	read: Scalars['Boolean']
	/** Allow anyone to write on the current object. */
	write: Scalars['Boolean']
}

/** Query is the top level type for queries. */
export type Query = {
	__typename?: 'Query'
	/** Fetches an object given its ID */
	node?: Maybe<Node>
	/** The role query can be used to get an object of the Role class by its id. */
	role: Role
	/** The roles query can be used to find objects of the Role class. */
	roles: RoleConnection
	/** The user query can be used to get an object of the User class by its id. */
	user: User
	/** The users query can be used to find objects of the User class. */
	users: UserConnection
	/** The health query can be used to check if the server is up and running. */
	health: Scalars['Boolean']
	/** The viewer query can be used to return the current user data. */
	viewer: Viewer
	/** The class query can be used to retrieve an existing object class. */
	class: Class
	/** The classes query can be used to retrieve the existing object classes. */
	classes: Array<Class>
}

/** Query is the top level type for queries. */
export type QueryNodeArgs = {
	id: Scalars['ID']
}

/** Query is the top level type for queries. */
export type QueryRoleArgs = {
	id: Scalars['ID']
	options?: Maybe<ReadOptionsInput>
}

/** Query is the top level type for queries. */
export type QueryRolesArgs = {
	where?: Maybe<RoleWhereInput>
	order?: Maybe<Array<RoleOrder>>
	skip?: Maybe<Scalars['Int']>
	after?: Maybe<Scalars['String']>
	first?: Maybe<Scalars['Int']>
	before?: Maybe<Scalars['String']>
	last?: Maybe<Scalars['Int']>
	options?: Maybe<ReadOptionsInput>
}

/** Query is the top level type for queries. */
export type QueryUserArgs = {
	id: Scalars['ID']
	options?: Maybe<ReadOptionsInput>
}

/** Query is the top level type for queries. */
export type QueryUsersArgs = {
	where?: Maybe<UserWhereInput>
	order?: Maybe<Array<UserOrder>>
	skip?: Maybe<Scalars['Int']>
	after?: Maybe<Scalars['String']>
	first?: Maybe<Scalars['Int']>
	before?: Maybe<Scalars['String']>
	last?: Maybe<Scalars['Int']>
	options?: Maybe<ReadOptionsInput>
}

/** Query is the top level type for queries. */
export type QueryClassArgs = {
	name: Scalars['String']
}

/** The ReadOptionsInputt type is used in queries in order to set the read preferences. */
export type ReadOptionsInput = {
	/** The read preference for the main query to be executed. */
	readPreference?: Maybe<ReadPreference>
	/** The read preference for the queries to be executed to include fields. */
	includeReadPreference?: Maybe<ReadPreference>
	/** The read preference for the subqueries that may be required. */
	subqueryReadPreference?: Maybe<ReadPreference>
}

/** The ReadPreference enum type is used in queries in order to select in which database replica the operation must run. */
export enum ReadPreference {
	Primary = 'PRIMARY',
	PrimaryPreferred = 'PRIMARY_PREFERRED',
	Secondary = 'SECONDARY',
	SecondaryPreferred = 'SECONDARY_PREFERRED',
	Nearest = 'NEAREST',
}

/** The RelationFieldInput is used to specify a field of type relation for an object class schema. */
export type RelationFieldInput = {
	/** This is the field name. */
	name: Scalars['String']
	/** This is the name of the target class for the field. */
	targetClassName: Scalars['String']
}

export type ResetPasswordInput = {
	email: Scalars['String']
	clientMutationId?: Maybe<Scalars['String']>
}

export type ResetPasswordPayload = {
	__typename?: 'ResetPasswordPayload'
	/** It's always true. */
	ok: Scalars['Boolean']
	clientMutationId?: Maybe<Scalars['String']>
}

/** The Role object type is used in operations that involve outputting objects of Role class. */
export type Role = ParseObject &
	Node & {
		__typename?: 'Role'
		/** The ID of an object */
		id: Scalars['ID']
		/** This is the object id. */
		objectId: Scalars['ID']
		/** This is the date in which the object was created. */
		createdAt: Scalars['Date']
		/** This is the date in which the object was las updated. */
		updatedAt: Scalars['Date']
		ACL: Acl
		/** This is the object name. */
		name?: Maybe<Scalars['String']>
		/** This is the object users. */
		users: UserConnection
		/** This is the object roles. */
		roles: RoleConnection
	}

/** The Role object type is used in operations that involve outputting objects of Role class. */
export type RoleUsersArgs = {
	where?: Maybe<UserWhereInput>
	order?: Maybe<Array<UserOrder>>
	skip?: Maybe<Scalars['Int']>
	after?: Maybe<Scalars['String']>
	first?: Maybe<Scalars['Int']>
	before?: Maybe<Scalars['String']>
	last?: Maybe<Scalars['Int']>
	options?: Maybe<ReadOptionsInput>
}

/** The Role object type is used in operations that involve outputting objects of Role class. */
export type RoleRolesArgs = {
	where?: Maybe<RoleWhereInput>
	order?: Maybe<Array<RoleOrder>>
	skip?: Maybe<Scalars['Int']>
	after?: Maybe<Scalars['String']>
	first?: Maybe<Scalars['Int']>
	before?: Maybe<Scalars['String']>
	last?: Maybe<Scalars['Int']>
	options?: Maybe<ReadOptionsInput>
}

/** Allow to manage roles in ACL. If read and write are null the role have read and write rights. */
export type RoleAcl = {
	__typename?: 'RoleACL'
	/** Name of the targetted Role. */
	roleName: Scalars['ID']
	/** Allow users who are members of the role to read the current object. */
	read: Scalars['Boolean']
	/** Allow users who are members of the role to write on the current object. */
	write: Scalars['Boolean']
}

/** Allow to manage roles in ACL. */
export type RoleAclInput = {
	/** Name of the targetted Role. */
	roleName: Scalars['String']
	/** Allow users who are members of the role to read the current object. */
	read: Scalars['Boolean']
	/** Allow users who are members of the role to write on the current object. */
	write: Scalars['Boolean']
}

/** A connection to a list of items. */
export type RoleConnection = {
	__typename?: 'RoleConnection'
	/** Information to aid in pagination. */
	pageInfo: PageInfo
	/** A list of edges. */
	edges?: Maybe<Array<Maybe<RoleEdge>>>
	/** This is the total matched objecs count that is returned when the count flag is set. */
	count: Scalars['Int']
}

/** An edge in a connection. */
export type RoleEdge = {
	__typename?: 'RoleEdge'
	/** The item at the end of the edge */
	node?: Maybe<Role>
	/** A cursor for use in pagination */
	cursor: Scalars['String']
}

/** The RoleOrder input type is used when sorting objects of the Role class. */
export enum RoleOrder {
	ObjectIdAsc = 'objectId_ASC',
	ObjectIdDesc = 'objectId_DESC',
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC',
	AclAsc = 'ACL_ASC',
	AclDesc = 'ACL_DESC',
	NameAsc = 'name_ASC',
	NameDesc = 'name_DESC',
	UsersAsc = 'users_ASC',
	UsersDesc = 'users_DESC',
	RolesAsc = 'roles_ASC',
	RolesDesc = 'roles_DESC',
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
}

/** Allow to link OR add and link an object of the Role class. */
export type RolePointerInput = {
	/** Link an existing object from Role class. You can use either the global or the object id. */
	link?: Maybe<Scalars['ID']>
	/** Create and link an object from Role class. */
	createAndLink?: Maybe<CreateRoleFieldsInput>
}

/** Allow to add, remove, createAndAdd objects of the Role class into a relation field. */
export type RoleRelationInput = {
	/** Add existing objects from the Role class into the relation. You can use either the global or the object ids. */
	add?: Maybe<Array<Scalars['ID']>>
	/** Remove existing objects from the Role class out of the relation. You can use either the global or the object ids. */
	remove?: Maybe<Array<Scalars['ID']>>
	/** Create and add objects of the Role class into the relation. */
	createAndAdd?: Maybe<Array<CreateRoleFieldsInput>>
}

/** The RoleRelationWhereInput input type is used in operations that involve filtering objects of Role class. */
export type RoleRelationWhereInput = {
	/** Run a relational/pointer query where at least one child object can match. */
	have?: Maybe<RoleWhereInput>
	/** Run an inverted relational/pointer query where at least one child object can match. */
	haveNot?: Maybe<RoleWhereInput>
	/** Check if the relation/pointer contains objects. */
	exists?: Maybe<Scalars['Boolean']>
}

/** The RoleWhereInput input type is used in operations that involve filtering objects of Role class. */
export type RoleWhereInput = {
	/** This is the object objectId. */
	objectId?: Maybe<IdWhereInput>
	/** This is the object createdAt. */
	createdAt?: Maybe<DateWhereInput>
	/** This is the object updatedAt. */
	updatedAt?: Maybe<DateWhereInput>
	/** This is the object ACL. */
	ACL?: Maybe<ObjectWhereInput>
	/** This is the object name. */
	name?: Maybe<StringWhereInput>
	/** This is the object users. */
	users?: Maybe<UserRelationWhereInput>
	/** This is the object roles. */
	roles?: Maybe<RoleRelationWhereInput>
	/** This is the object id. */
	id?: Maybe<IdWhereInput>
	/** This is the OR operator to compound constraints. */
	OR?: Maybe<Array<RoleWhereInput>>
	/** This is the AND operator to compound constraints. */
	AND?: Maybe<Array<RoleWhereInput>>
	/** This is the NOR operator to compound constraints. */
	NOR?: Maybe<Array<RoleWhereInput>>
}

/** The SchemaACLField is used to return information of an ACL field. */
export type SchemaAclField = SchemaField & {
	__typename?: 'SchemaACLField'
	/** This is the field name. */
	name: Scalars['String']
}

/** The SchemaArrayField is used to return information of an Array field. */
export type SchemaArrayField = SchemaField & {
	__typename?: 'SchemaArrayField'
	/** This is the field name. */
	name: Scalars['String']
}

/** The SchemaArrayFieldInput is used to specify a field of type array for an object class schema. */
export type SchemaArrayFieldInput = {
	/** This is the field name. */
	name: Scalars['String']
}

/** The SchemaBooleanField is used to return information of a Boolean field. */
export type SchemaBooleanField = SchemaField & {
	__typename?: 'SchemaBooleanField'
	/** This is the field name. */
	name: Scalars['String']
}

/** The SchemaBooleanFieldInput is used to specify a field of type boolean for an object class schema. */
export type SchemaBooleanFieldInput = {
	/** This is the field name. */
	name: Scalars['String']
}

/** The SchemaBytesField is used to return information of a Bytes field. */
export type SchemaBytesField = SchemaField & {
	__typename?: 'SchemaBytesField'
	/** This is the field name. */
	name: Scalars['String']
}

/** The SchemaBytesFieldInput is used to specify a field of type bytes for an object class schema. */
export type SchemaBytesFieldInput = {
	/** This is the field name. */
	name: Scalars['String']
}

/** The SchemaDateField is used to return information of a Date field. */
export type SchemaDateField = SchemaField & {
	__typename?: 'SchemaDateField'
	/** This is the field name. */
	name: Scalars['String']
}

/** The SchemaDateFieldInput is used to specify a field of type date for an object class schema. */
export type SchemaDateFieldInput = {
	/** This is the field name. */
	name: Scalars['String']
}

/** The SchemaField interface type is used as a base type for the different supported fields of an object class schema. */
export type SchemaField = {
	/** This is the field name. */
	name: Scalars['String']
}

/** The SchemaFieldInput is used to specify a field of an object class schema. */
export type SchemaFieldInput = {
	/** This is the field name. */
	name: Scalars['String']
}

/** The CreateClassSchemaInput type is used to specify the schema for a new object class to be created. */
export type SchemaFieldsInput = {
	/** These are the String fields to be added to the class schema. */
	addStrings?: Maybe<Array<SchemaStringFieldInput>>
	/** These are the Number fields to be added to the class schema. */
	addNumbers?: Maybe<Array<SchemaNumberFieldInput>>
	/** These are the Boolean fields to be added to the class schema. */
	addBooleans?: Maybe<Array<SchemaBooleanFieldInput>>
	/** These are the Array fields to be added to the class schema. */
	addArrays?: Maybe<Array<SchemaArrayFieldInput>>
	/** These are the Object fields to be added to the class schema. */
	addObjects?: Maybe<Array<SchemaObjectFieldInput>>
	/** These are the Date fields to be added to the class schema. */
	addDates?: Maybe<Array<SchemaDateFieldInput>>
	/** These are the File fields to be added to the class schema. */
	addFiles?: Maybe<Array<SchemaFileFieldInput>>
	/** This is the Geo Point field to be added to the class schema. Currently it is supported only one GeoPoint field per Class. */
	addGeoPoint?: Maybe<SchemaGeoPointFieldInput>
	/** These are the Polygon fields to be added to the class schema. */
	addPolygons?: Maybe<Array<SchemaPolygonFieldInput>>
	/** These are the Bytes fields to be added to the class schema. */
	addBytes?: Maybe<Array<SchemaBytesFieldInput>>
	/** These are the Pointer fields to be added to the class schema. */
	addPointers?: Maybe<Array<PointerFieldInput>>
	/** These are the Relation fields to be added to the class schema. */
	addRelations?: Maybe<Array<RelationFieldInput>>
	/** These are the fields to be removed from the class schema. */
	remove?: Maybe<Array<SchemaFieldInput>>
}

/** The SchemaFileField is used to return information of a File field. */
export type SchemaFileField = SchemaField & {
	__typename?: 'SchemaFileField'
	/** This is the field name. */
	name: Scalars['String']
}

/** The SchemaFileFieldInput is used to specify a field of type file for an object class schema. */
export type SchemaFileFieldInput = {
	/** This is the field name. */
	name: Scalars['String']
}

/** The SchemaGeoPointField is used to return information of a Geo Point field. */
export type SchemaGeoPointField = SchemaField & {
	__typename?: 'SchemaGeoPointField'
	/** This is the field name. */
	name: Scalars['String']
}

/** The SchemaGeoPointFieldInput is used to specify a field of type geo point for an object class schema. */
export type SchemaGeoPointFieldInput = {
	/** This is the field name. */
	name: Scalars['String']
}

/** The SchemaNumberField is used to return information of a Number field. */
export type SchemaNumberField = SchemaField & {
	__typename?: 'SchemaNumberField'
	/** This is the field name. */
	name: Scalars['String']
}

/** The SchemaNumberFieldInput is used to specify a field of type number for an object class schema. */
export type SchemaNumberFieldInput = {
	/** This is the field name. */
	name: Scalars['String']
}

/** The SchemaObjectField is used to return information of an Object field. */
export type SchemaObjectField = SchemaField & {
	__typename?: 'SchemaObjectField'
	/** This is the field name. */
	name: Scalars['String']
}

/** The SchemaObjectFieldInput is used to specify a field of type object for an object class schema. */
export type SchemaObjectFieldInput = {
	/** This is the field name. */
	name: Scalars['String']
}

/** The SchemaPointerField is used to return information of a Pointer field. */
export type SchemaPointerField = SchemaField & {
	__typename?: 'SchemaPointerField'
	/** This is the field name. */
	name: Scalars['String']
	/** This is the name of the target class for the field. */
	targetClassName: Scalars['String']
}

/** The SchemaPolygonField is used to return information of a Polygon field. */
export type SchemaPolygonField = SchemaField & {
	__typename?: 'SchemaPolygonField'
	/** This is the field name. */
	name: Scalars['String']
}

/** The SchemaPolygonFieldInput is used to specify a field of type polygon for an object class schema. */
export type SchemaPolygonFieldInput = {
	/** This is the field name. */
	name: Scalars['String']
}

/** The SchemaRelationField is used to return information of a Relation field. */
export type SchemaRelationField = SchemaField & {
	__typename?: 'SchemaRelationField'
	/** This is the field name. */
	name: Scalars['String']
	/** This is the name of the target class for the field. */
	targetClassName: Scalars['String']
}

/** The SchemaStringField is used to return information of a String field. */
export type SchemaStringField = SchemaField & {
	__typename?: 'SchemaStringField'
	/** This is the field name. */
	name: Scalars['String']
}

/** The SchemaStringFieldInput is used to specify a field of type string for an object class schema. */
export type SchemaStringFieldInput = {
	/** This is the field name. */
	name: Scalars['String']
}

/** The SearchInput type is used to specifiy a search operation on a full text search. */
export type SearchInput = {
	/** This is the term to be searched. */
	term: Scalars['String']
	/** This is the language to tetermine the list of stop words and the rules for tokenizer. */
	language?: Maybe<Scalars['String']>
	/** This is the flag to enable or disable case sensitive search. */
	caseSensitive?: Maybe<Scalars['Boolean']>
	/** This is the flag to enable or disable diacritic sensitive search. */
	diacriticSensitive?: Maybe<Scalars['Boolean']>
}

/** The SelectInput type is used to specify an inQueryKey or a notInQueryKey operation on a constraint. */
export type SelectInput = {
	/** This is the subquery to be executed. */
	query: SubqueryInput
	/** This is the key in the result of the subquery that must match (not match) the field. */
	key: Scalars['String']
}

export type SendVerificationEmailInput = {
	email: Scalars['String']
	clientMutationId?: Maybe<Scalars['String']>
}

export type SendVerificationEmailPayload = {
	__typename?: 'SendVerificationEmailPayload'
	/** It's always true. */
	ok: Scalars['Boolean']
	clientMutationId?: Maybe<Scalars['String']>
}

export type SignUpInput = {
	userFields?: Maybe<CreateUserFieldsInput>
	clientMutationId?: Maybe<Scalars['String']>
}

export type SignUpPayload = {
	__typename?: 'SignUpPayload'
	/** This is the new user that was created, signed up and returned as a viewer. */
	viewer: Viewer
	clientMutationId?: Maybe<Scalars['String']>
}

/** The StringWhereInput input type is used in operations that involve filtering objects by a field of type String. */
export type StringWhereInput = {
	/**
	 * This is the equalTo operator to specify a constraint to select the objects
	 * where the value of a field equals to a specified value.
	 */
	equalTo?: Maybe<Scalars['String']>
	/**
	 * This is the notEqualTo operator to specify a constraint to select the objects
	 * where the value of a field do not equal to a specified value.
	 */
	notEqualTo?: Maybe<Scalars['String']>
	/**
	 * This is the lessThan operator to specify a constraint to select the objects
	 * where the value of a field is less than a specified value.
	 */
	lessThan?: Maybe<Scalars['String']>
	/**
	 * This is the lessThanOrEqualTo operator to specify a constraint to select the
	 * objects where the value of a field is less than or equal to a specified value.
	 */
	lessThanOrEqualTo?: Maybe<Scalars['String']>
	/**
	 * This is the greaterThan operator to specify a constraint to select the objects
	 * where the value of a field is greater than a specified value.
	 */
	greaterThan?: Maybe<Scalars['String']>
	/**
	 * This is the greaterThanOrEqualTo operator to specify a constraint to select
	 * the objects where the value of a field is greater than or equal to a specified value.
	 */
	greaterThanOrEqualTo?: Maybe<Scalars['String']>
	/**
	 * This is the in operator to specify a constraint to select the objects where
	 * the value of a field equals any value in the specified array.
	 */
	in?: Maybe<Array<Maybe<Scalars['String']>>>
	/**
	 * This is the notIn operator to specify a constraint to select the objects where
	 * the value of a field do not equal any value in the specified array.
	 */
	notIn?: Maybe<Array<Maybe<Scalars['String']>>>
	/** This is the exists operator to specify a constraint to select the objects where a field exists (or do not exist). */
	exists?: Maybe<Scalars['Boolean']>
	/**
	 * This is the matchesRegex operator to specify a constraint to select the
	 * objects where the value of a field matches a specified regular expression.
	 */
	matchesRegex?: Maybe<Scalars['String']>
	/**
	 * This is the options operator to specify optional flags (such as "i" and "m")
	 * to be added to a matchesRegex operation in the same set of constraints.
	 */
	options?: Maybe<Scalars['String']>
	/** This is the $text operator to specify a full text search constraint. */
	text?: Maybe<TextInput>
	/**
	 * This is the inQueryKey operator to specify a constraint to select the objects
	 * where a field equals to a key in the result of a different query.
	 */
	inQueryKey?: Maybe<SelectInput>
	/**
	 * This is the notInQueryKey operator to specify a constraint to select the
	 * objects where a field do not equal to a key in the result of a different query.
	 */
	notInQueryKey?: Maybe<SelectInput>
}

/** The SubqueryInput type is used to specify a sub query to another class. */
export type SubqueryInput = {
	/** This is the class name of the object. */
	className: Scalars['String']
	/** These are the conditions that the objects need to match in order to be found */
	where: Scalars['Object']
}

/** The TextInput type is used to specify a text operation on a constraint. */
export type TextInput = {
	/** This is the search to be executed. */
	search: SearchInput
}

export type UpdateClassInput = {
	/** This is the name of the object class. */
	name: Scalars['String']
	/** These are the schema's fields of the object class. */
	schemaFields?: Maybe<SchemaFieldsInput>
	clientMutationId?: Maybe<Scalars['String']>
}

export type UpdateClassPayload = {
	__typename?: 'UpdateClassPayload'
	/** This is the updated class. */
	class: Class
	clientMutationId?: Maybe<Scalars['String']>
}

/** The UpdateRoleFieldsInput input type is used in operations that involve creation of objects in the Role class. */
export type UpdateRoleFieldsInput = {
	ACL?: Maybe<AclInput>
	/** This is the object name. */
	name?: Maybe<Scalars['String']>
	/** This is the object users. */
	users?: Maybe<UserRelationInput>
	/** This is the object roles. */
	roles?: Maybe<RoleRelationInput>
}

export type UpdateRoleInput = {
	/** This is the object id. You can use either the global or the object id. */
	id: Scalars['ID']
	/** These are the fields that will be used to update the object. */
	fields?: Maybe<UpdateRoleFieldsInput>
	clientMutationId?: Maybe<Scalars['String']>
}

export type UpdateRolePayload = {
	__typename?: 'UpdateRolePayload'
	/** This is the updated object. */
	role: Role
	clientMutationId?: Maybe<Scalars['String']>
}

/** The UpdateUserFieldsInput input type is used in operations that involve creation of objects in the User class. */
export type UpdateUserFieldsInput = {
	ACL?: Maybe<AclInput>
	/** This is the object username. */
	username?: Maybe<Scalars['String']>
	/** This is the object password. */
	password?: Maybe<Scalars['String']>
	/** This is the object email. */
	email?: Maybe<Scalars['String']>
	/** This is the object emailVerified. */
	emailVerified?: Maybe<Scalars['Boolean']>
	/** This is the object authData. */
	authData?: Maybe<Scalars['Object']>
	/** This is the object firstname. */
	firstname?: Maybe<Scalars['String']>
	/** This is the object lastname. */
	lastname?: Maybe<Scalars['String']>
	/** This is the object picture. */
	picture?: Maybe<Scalars['File']>
}

export type UpdateUserInput = {
	/** This is the object id. You can use either the global or the object id. */
	id: Scalars['ID']
	/** These are the fields that will be used to update the object. */
	fields?: Maybe<UpdateUserFieldsInput>
	clientMutationId?: Maybe<Scalars['String']>
}

export type UpdateUserPayload = {
	__typename?: 'UpdateUserPayload'
	/** This is the updated object. */
	user: User
	clientMutationId?: Maybe<Scalars['String']>
}

/** The User object type is used in operations that involve outputting objects of User class. */
export type User = ParseObject &
	Node & {
		__typename?: 'User'
		/** The ID of an object */
		id: Scalars['ID']
		/** This is the object id. */
		objectId: Scalars['ID']
		/** This is the date in which the object was created. */
		createdAt: Scalars['Date']
		/** This is the date in which the object was las updated. */
		updatedAt: Scalars['Date']
		ACL: Acl
		/** This is the object username. */
		username?: Maybe<Scalars['String']>
		/** This is the object email. */
		email?: Maybe<Scalars['String']>
		/** This is the object emailVerified. */
		emailVerified?: Maybe<Scalars['Boolean']>
		/** This is the object authData. */
		authData?: Maybe<Scalars['Object']>
		/** This is the object firstname. */
		firstname?: Maybe<Scalars['String']>
		/** This is the object lastname. */
		lastname?: Maybe<Scalars['String']>
		/** This is the object picture. */
		picture?: Maybe<FileInfo>
	}

/** Allow to manage users in ACL. If read and write are null the users have read and write rights. */
export type UserAcl = {
	__typename?: 'UserACL'
	/** ID of the targetted User. */
	userId: Scalars['ID']
	/** Allow the user to read the current object. */
	read: Scalars['Boolean']
	/** Allow the user to write on the current object. */
	write: Scalars['Boolean']
}

/** Allow to manage users in ACL. */
export type UserAclInput = {
	/** ID of the targetted User. */
	userId: Scalars['ID']
	/** Allow the user to read the current object. */
	read: Scalars['Boolean']
	/** Allow the user to write on the current object. */
	write: Scalars['Boolean']
}

/** A connection to a list of items. */
export type UserConnection = {
	__typename?: 'UserConnection'
	/** Information to aid in pagination. */
	pageInfo: PageInfo
	/** A list of edges. */
	edges?: Maybe<Array<Maybe<UserEdge>>>
	/** This is the total matched objecs count that is returned when the count flag is set. */
	count: Scalars['Int']
}

/** An edge in a connection. */
export type UserEdge = {
	__typename?: 'UserEdge'
	/** The item at the end of the edge */
	node?: Maybe<User>
	/** A cursor for use in pagination */
	cursor: Scalars['String']
}

/** The UserOrder input type is used when sorting objects of the User class. */
export enum UserOrder {
	ObjectIdAsc = 'objectId_ASC',
	ObjectIdDesc = 'objectId_DESC',
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC',
	AclAsc = 'ACL_ASC',
	AclDesc = 'ACL_DESC',
	UsernameAsc = 'username_ASC',
	UsernameDesc = 'username_DESC',
	PasswordAsc = 'password_ASC',
	PasswordDesc = 'password_DESC',
	EmailAsc = 'email_ASC',
	EmailDesc = 'email_DESC',
	EmailVerifiedAsc = 'emailVerified_ASC',
	EmailVerifiedDesc = 'emailVerified_DESC',
	AuthDataAsc = 'authData_ASC',
	AuthDataDesc = 'authData_DESC',
	FirstnameAsc = 'firstname_ASC',
	FirstnameDesc = 'firstname_DESC',
	LastnameAsc = 'lastname_ASC',
	LastnameDesc = 'lastname_DESC',
	PictureAsc = 'picture_ASC',
	PictureDesc = 'picture_DESC',
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
}

/** Allow to link OR add and link an object of the User class. */
export type UserPointerInput = {
	/** Link an existing object from User class. You can use either the global or the object id. */
	link?: Maybe<Scalars['ID']>
	/** Create and link an object from User class. */
	createAndLink?: Maybe<CreateUserFieldsInput>
}

/** Allow to add, remove, createAndAdd objects of the User class into a relation field. */
export type UserRelationInput = {
	/** Add existing objects from the User class into the relation. You can use either the global or the object ids. */
	add?: Maybe<Array<Scalars['ID']>>
	/** Remove existing objects from the User class out of the relation. You can use either the global or the object ids. */
	remove?: Maybe<Array<Scalars['ID']>>
	/** Create and add objects of the User class into the relation. */
	createAndAdd?: Maybe<Array<CreateUserFieldsInput>>
}

/** The UserRelationWhereInput input type is used in operations that involve filtering objects of User class. */
export type UserRelationWhereInput = {
	/** Run a relational/pointer query where at least one child object can match. */
	have?: Maybe<UserWhereInput>
	/** Run an inverted relational/pointer query where at least one child object can match. */
	haveNot?: Maybe<UserWhereInput>
	/** Check if the relation/pointer contains objects. */
	exists?: Maybe<Scalars['Boolean']>
}

/** The UserWhereInput input type is used in operations that involve filtering objects of User class. */
export type UserWhereInput = {
	/** This is the object objectId. */
	objectId?: Maybe<IdWhereInput>
	/** This is the object createdAt. */
	createdAt?: Maybe<DateWhereInput>
	/** This is the object updatedAt. */
	updatedAt?: Maybe<DateWhereInput>
	/** This is the object ACL. */
	ACL?: Maybe<ObjectWhereInput>
	/** This is the object username. */
	username?: Maybe<StringWhereInput>
	/** This is the object password. */
	password?: Maybe<StringWhereInput>
	/** This is the object email. */
	email?: Maybe<StringWhereInput>
	/** This is the object emailVerified. */
	emailVerified?: Maybe<BooleanWhereInput>
	/** This is the object authData. */
	authData?: Maybe<ObjectWhereInput>
	/** This is the object firstname. */
	firstname?: Maybe<StringWhereInput>
	/** This is the object lastname. */
	lastname?: Maybe<StringWhereInput>
	/** This is the object picture. */
	picture?: Maybe<FileWhereInput>
	/** This is the object id. */
	id?: Maybe<IdWhereInput>
	/** This is the OR operator to compound constraints. */
	OR?: Maybe<Array<UserWhereInput>>
	/** This is the AND operator to compound constraints. */
	AND?: Maybe<Array<UserWhereInput>>
	/** This is the NOR operator to compound constraints. */
	NOR?: Maybe<Array<UserWhereInput>>
}

/** The Viewer object type is used in operations that involve outputting the current user data. */
export type Viewer = {
	__typename?: 'Viewer'
	/** The current user session token. */
	sessionToken: Scalars['String']
	/** This is the current user. */
	user: User
}

/** The WithinInput type is used to specify a within operation on a constraint. */
export type WithinInput = {
	/** This is the box to be specified. */
	box: BoxInput
}

export type CommonViewerQueryVariables = {}

export type CommonViewerQuery = { __typename?: 'Query' } & {
	viewer: { __typename?: 'Viewer' } & {
		user: { __typename?: 'User' } & Pick<
			User,
			'id' | 'email' | 'firstname' | 'lastname'
		>
	}
}

export type ViewerChipFragment = { __typename?: 'User' } & Pick<
	User,
	'firstname' | 'lastname'
> & { picture: Maybe<{ __typename?: 'FileInfo' } & Pick<FileInfo, 'url'>> }

export type LogInMutationVariables = {
	email: Scalars['String']
	password: Scalars['String']
}

export type LogInMutation = { __typename?: 'Mutation' } & {
	logIn: Maybe<
		{ __typename?: 'LogInPayload' } & {
			viewer: { __typename?: 'Viewer' } & Pick<Viewer, 'sessionToken'>
		}
	>
}

export type UpdateUserOnBoardingMutationVariables = {
	userId: Scalars['ID']
	firstname: Scalars['String']
	lastname: Scalars['String']
}

export type UpdateUserOnBoardingMutation = { __typename?: 'Mutation' } & {
	updateUser: Maybe<
		{ __typename?: 'UpdateUserPayload' } & {
			user: { __typename?: 'User' } & Pick<
				User,
				'id' | 'firstname' | 'lastname'
			>
		}
	>
}

export type SignUpMutationVariables = {
	email: Scalars['String']
	password: Scalars['String']
}

export type SignUpMutation = { __typename?: 'Mutation' } & {
	signUp: Maybe<
		{ __typename?: 'SignUpPayload' } & {
			viewer: { __typename?: 'Viewer' } & Pick<Viewer, 'sessionToken'>
		}
	>
}

export type TopBarQueryVariables = {}

export type TopBarQuery = { __typename?: 'Query' } & {
	viewer: { __typename?: 'Viewer' } & {
		user: { __typename?: 'User' } & ViewerChipFragment
	}
}

export const ViewerChipFragmentDoc = gql`
	fragment ViewerChip on User {
		firstname
		lastname
		picture {
			url
		}
	}
`
export const CommonViewerDocument = gql`
	query CommonViewer {
		viewer {
			user {
				id
				email
				firstname
				lastname
			}
		}
	}
`

/**
 * __useCommonViewerQuery__
 *
 * To run a query within a React component, call `useCommonViewerQuery` and pass it any options that fit your needs.
 * When your component renders, `useCommonViewerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCommonViewerQuery({
 *   variables: {
 *   },
 * });
 */
export function useCommonViewerQuery(
	baseOptions?: ApolloReactHooks.QueryHookOptions<
		CommonViewerQuery,
		CommonViewerQueryVariables
	>,
) {
	return ApolloReactHooks.useQuery<
		CommonViewerQuery,
		CommonViewerQueryVariables
	>(CommonViewerDocument, baseOptions)
}
export function useCommonViewerLazyQuery(
	baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
		CommonViewerQuery,
		CommonViewerQueryVariables
	>,
) {
	return ApolloReactHooks.useLazyQuery<
		CommonViewerQuery,
		CommonViewerQueryVariables
	>(CommonViewerDocument, baseOptions)
}
export type CommonViewerQueryHookResult = ReturnType<
	typeof useCommonViewerQuery
>
export type CommonViewerLazyQueryHookResult = ReturnType<
	typeof useCommonViewerLazyQuery
>
export type CommonViewerQueryResult = ApolloReactCommon.QueryResult<
	CommonViewerQuery,
	CommonViewerQueryVariables
>
export const LogInDocument = gql`
	mutation logIn($email: String!, $password: String!) {
		logIn(input: { username: $email, password: $password }) {
			viewer {
				sessionToken
			}
		}
	}
`
export type LogInMutationFn = ApolloReactCommon.MutationFunction<
	LogInMutation,
	LogInMutationVariables
>

/**
 * __useLogInMutation__
 *
 * To run a mutation, you first call `useLogInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logInMutation, { data, loading, error }] = useLogInMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLogInMutation(
	baseOptions?: ApolloReactHooks.MutationHookOptions<
		LogInMutation,
		LogInMutationVariables
	>,
) {
	return ApolloReactHooks.useMutation<LogInMutation, LogInMutationVariables>(
		LogInDocument,
		baseOptions,
	)
}
export type LogInMutationHookResult = ReturnType<typeof useLogInMutation>
export type LogInMutationResult = ApolloReactCommon.MutationResult<
	LogInMutation
>
export type LogInMutationOptions = ApolloReactCommon.BaseMutationOptions<
	LogInMutation,
	LogInMutationVariables
>
export const UpdateUserOnBoardingDocument = gql`
	mutation updateUserOnBoarding(
		$userId: ID!
		$firstname: String!
		$lastname: String!
	) {
		updateUser(
			input: {
				id: $userId
				fields: { firstname: $firstname, lastname: $lastname }
			}
		) {
			user {
				id
				firstname
				lastname
			}
		}
	}
`
export type UpdateUserOnBoardingMutationFn = ApolloReactCommon.MutationFunction<
	UpdateUserOnBoardingMutation,
	UpdateUserOnBoardingMutationVariables
>

/**
 * __useUpdateUserOnBoardingMutation__
 *
 * To run a mutation, you first call `useUpdateUserOnBoardingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserOnBoardingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserOnBoardingMutation, { data, loading, error }] = useUpdateUserOnBoardingMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      firstname: // value for 'firstname'
 *      lastname: // value for 'lastname'
 *   },
 * });
 */
export function useUpdateUserOnBoardingMutation(
	baseOptions?: ApolloReactHooks.MutationHookOptions<
		UpdateUserOnBoardingMutation,
		UpdateUserOnBoardingMutationVariables
	>,
) {
	return ApolloReactHooks.useMutation<
		UpdateUserOnBoardingMutation,
		UpdateUserOnBoardingMutationVariables
	>(UpdateUserOnBoardingDocument, baseOptions)
}
export type UpdateUserOnBoardingMutationHookResult = ReturnType<
	typeof useUpdateUserOnBoardingMutation
>
export type UpdateUserOnBoardingMutationResult = ApolloReactCommon.MutationResult<
	UpdateUserOnBoardingMutation
>
export type UpdateUserOnBoardingMutationOptions = ApolloReactCommon.BaseMutationOptions<
	UpdateUserOnBoardingMutation,
	UpdateUserOnBoardingMutationVariables
>
export const SignUpDocument = gql`
	mutation signUp($email: String!, $password: String!) {
		signUp(
			input: {
				userFields: {
					username: $email
					email: $email
					password: $password
				}
			}
		) {
			viewer {
				sessionToken
			}
		}
	}
`
export type SignUpMutationFn = ApolloReactCommon.MutationFunction<
	SignUpMutation,
	SignUpMutationVariables
>

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignUpMutation(
	baseOptions?: ApolloReactHooks.MutationHookOptions<
		SignUpMutation,
		SignUpMutationVariables
	>,
) {
	return ApolloReactHooks.useMutation<
		SignUpMutation,
		SignUpMutationVariables
	>(SignUpDocument, baseOptions)
}
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>
export type SignUpMutationResult = ApolloReactCommon.MutationResult<
	SignUpMutation
>
export type SignUpMutationOptions = ApolloReactCommon.BaseMutationOptions<
	SignUpMutation,
	SignUpMutationVariables
>
export const TopBarDocument = gql`
	query TopBar {
		viewer {
			user {
				...ViewerChip
			}
		}
	}
	${ViewerChipFragmentDoc}
`

/**
 * __useTopBarQuery__
 *
 * To run a query within a React component, call `useTopBarQuery` and pass it any options that fit your needs.
 * When your component renders, `useTopBarQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTopBarQuery({
 *   variables: {
 *   },
 * });
 */
export function useTopBarQuery(
	baseOptions?: ApolloReactHooks.QueryHookOptions<
		TopBarQuery,
		TopBarQueryVariables
	>,
) {
	return ApolloReactHooks.useQuery<TopBarQuery, TopBarQueryVariables>(
		TopBarDocument,
		baseOptions,
	)
}
export function useTopBarLazyQuery(
	baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
		TopBarQuery,
		TopBarQueryVariables
	>,
) {
	return ApolloReactHooks.useLazyQuery<TopBarQuery, TopBarQueryVariables>(
		TopBarDocument,
		baseOptions,
	)
}
export type TopBarQueryHookResult = ReturnType<typeof useTopBarQuery>
export type TopBarLazyQueryHookResult = ReturnType<typeof useTopBarLazyQuery>
export type TopBarQueryResult = ApolloReactCommon.QueryResult<
	TopBarQuery,
	TopBarQueryVariables
>
