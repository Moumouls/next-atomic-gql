export default `"""Current access control list of the current object."""
type ACL {
  """Access control list for users."""
  users: [UserACL!]

  """Access control list for roles."""
  roles: [RoleACL!]

  """Public access control list."""
  public: PublicACL
}

"""
Allow to manage access rights. If not provided object will be publicly readable and writable
"""
input ACLInput {
  """Access control list for users."""
  users: [UserACLInput!]

  """Access control list for roles."""
  roles: [RoleACLInput!]

  """Public access control list."""
  public: PublicACLInput
}

"""
The Any scalar type is used in operations and types that involve any type of value.
"""
scalar Any

"""
Use Inline Fragment on Array to get results: https://graphql.org/learn/queries/#inline-fragments
"""
union ArrayResult = Element | Role | User

"""
The ArrayWhereInput input type is used in operations that involve filtering objects by a field of type Array.
"""
input ArrayWhereInput {
  """
  This is the equalTo operator to specify a constraint to select the objects
  where the value of a field equals to a specified value.
  """
  equalTo: Any

  """
  This is the notEqualTo operator to specify a constraint to select the objects
  where the value of a field do not equal to a specified value.
  """
  notEqualTo: Any

  """
  This is the lessThan operator to specify a constraint to select the objects
  where the value of a field is less than a specified value.
  """
  lessThan: Any

  """
  This is the lessThanOrEqualTo operator to specify a constraint to select the
  objects where the value of a field is less than or equal to a specified value.
  """
  lessThanOrEqualTo: Any

  """
  This is the greaterThan operator to specify a constraint to select the objects
  where the value of a field is greater than a specified value.
  """
  greaterThan: Any

  """
  This is the greaterThanOrEqualTo operator to specify a constraint to select
  the objects where the value of a field is greater than or equal to a specified value.
  """
  greaterThanOrEqualTo: Any

  """
  This is the in operator to specify a constraint to select the objects where
  the value of a field equals any value in the specified array.
  """
  in: [Any]

  """
  This is the notIn operator to specify a constraint to select the objects where
  the value of a field do not equal any value in the specified array.
  """
  notIn: [Any]

  """
  This is the exists operator to specify a constraint to select the objects where a field exists (or do not exist).
  """
  exists: Boolean

  """
  This is the containedBy operator to specify a constraint to select the objects
  where the values of an array field is contained by another specified array.
  """
  containedBy: [Any]

  """
  This is the contains operator to specify a constraint to select the objects
  where the values of an array field contain all elements of another specified array.
  """
  contains: [Any]

  """
  This is the inQueryKey operator to specify a constraint to select the objects
  where a field equals to a key in the result of a different query.
  """
  inQueryKey: SelectInput

  """
  This is the notInQueryKey operator to specify a constraint to select the
  objects where a field do not equal to a key in the result of a different query.
  """
  notInQueryKey: SelectInput
}

"""
The BooleanWhereInput input type is used in operations that involve filtering objects by a field of type Boolean.
"""
input BooleanWhereInput {
  """
  This is the equalTo operator to specify a constraint to select the objects
  where the value of a field equals to a specified value.
  """
  equalTo: Boolean

  """
  This is the notEqualTo operator to specify a constraint to select the objects
  where the value of a field do not equal to a specified value.
  """
  notEqualTo: Boolean

  """
  This is the exists operator to specify a constraint to select the objects where a field exists (or do not exist).
  """
  exists: Boolean

  """
  This is the inQueryKey operator to specify a constraint to select the objects
  where a field equals to a key in the result of a different query.
  """
  inQueryKey: SelectInput

  """
  This is the notInQueryKey operator to specify a constraint to select the
  objects where a field do not equal to a key in the result of a different query.
  """
  notInQueryKey: SelectInput
}

"""
The BoxInput type is used to specifiy a box operation on a within geo query.
"""
input BoxInput {
  """This is the bottom left coordinates of the box."""
  bottomLeft: GeoPointInput!

  """This is the upper right coordinates of the box."""
  upperRight: GeoPointInput!
}

"""
The Bytes scalar type is used in operations and types that involve base 64 binary data.
"""
scalar Bytes

"""
The BytesWhereInput input type is used in operations that involve filtering objects by a field of type Bytes.
"""
input BytesWhereInput {
  """
  This is the equalTo operator to specify a constraint to select the objects
  where the value of a field equals to a specified value.
  """
  equalTo: Bytes

  """
  This is the notEqualTo operator to specify a constraint to select the objects
  where the value of a field do not equal to a specified value.
  """
  notEqualTo: Bytes

  """
  This is the lessThan operator to specify a constraint to select the objects
  where the value of a field is less than a specified value.
  """
  lessThan: Bytes

  """
  This is the lessThanOrEqualTo operator to specify a constraint to select the
  objects where the value of a field is less than or equal to a specified value.
  """
  lessThanOrEqualTo: Bytes

  """
  This is the greaterThan operator to specify a constraint to select the objects
  where the value of a field is greater than a specified value.
  """
  greaterThan: Bytes

  """
  This is the greaterThanOrEqualTo operator to specify a constraint to select
  the objects where the value of a field is greater than or equal to a specified value.
  """
  greaterThanOrEqualTo: Bytes

  """
  This is the in operator to specify a constraint to select the objects where
  the value of a field equals any value in the specified array.
  """
  in: [Bytes]

  """
  This is the notIn operator to specify a constraint to select the objects where
  the value of a field do not equal any value in the specified array.
  """
  notIn: [Bytes]

  """
  This is the exists operator to specify a constraint to select the objects where a field exists (or do not exist).
  """
  exists: Boolean

  """
  This is the inQueryKey operator to specify a constraint to select the objects
  where a field equals to a key in the result of a different query.
  """
  inQueryKey: SelectInput

  """
  This is the notInQueryKey operator to specify a constraint to select the
  objects where a field do not equal to a key in the result of a different query.
  """
  notInQueryKey: SelectInput
}

"""
The CenterSphereInput type is used to specifiy a centerSphere operation on a geoWithin query.
"""
input CenterSphereInput {
  """This is the center of the sphere."""
  center: GeoPointInput!

  """This is the radius of the sphere."""
  distance: Float!
}

"""
The Class type is used to return the information about an object class.
"""
type Class {
  """This is the name of the object class."""
  name: String!

  """These are the schema's fields of the object class."""
  schemaFields: [SchemaField!]!
}

input CreateClassInput {
  """This is the name of the object class."""
  name: String!

  """These are the schema's fields of the object class."""
  schemaFields: SchemaFieldsInput
  clientMutationId: String
}

type CreateClassPayload {
  """This is the created class."""
  class: Class!
  clientMutationId: String
}

input CreateFileInput {
  """This is the new file to be created and uploaded."""
  upload: Upload!
  clientMutationId: String
}

type CreateFilePayload {
  """This is the created file info."""
  fileInfo: FileInfo!
  clientMutationId: String
}

"""
The CreateRoleFieldsInput input type is used in operations that involve creation of objects in the Role class.
"""
input CreateRoleFieldsInput {
  ACL: ACLInput

  """This is the object name."""
  name: String

  """This is the object users."""
  users: UserRelationInput

  """This is the object roles."""
  roles: RoleRelationInput
}

input CreateRoleInput {
  """These are the fields that will be used to create the new object."""
  fields: CreateRoleFieldsInput
  clientMutationId: String
}

type CreateRolePayload {
  """This is the created object."""
  role: Role!
  clientMutationId: String
}

"""
The CreateUserFieldsInput input type is used in operations that involve creation of objects in the User class.
"""
input CreateUserFieldsInput {
  ACL: ACLInput

  """This is the object username."""
  username: String!

  """This is the object password."""
  password: String!

  """This is the object email."""
  email: String

  """This is the object emailVerified."""
  emailVerified: Boolean

  """This is the object authData."""
  authData: Object

  """This is the object firstname."""
  firstname: String

  """This is the object lastname."""
  lastname: String

  """This is the object picture."""
  picture: File
}

input CreateUserInput {
  """These are the fields that will be used to create the new object."""
  fields: CreateUserFieldsInput
  clientMutationId: String
}

type CreateUserPayload {
  """This is the created object."""
  user: User!
  clientMutationId: String
}

"""
The Date scalar type is used in operations and types that involve dates.
"""
scalar Date

"""
The DateWhereInput input type is used in operations that involve filtering objects by a field of type Date.
"""
input DateWhereInput {
  """
  This is the equalTo operator to specify a constraint to select the objects
  where the value of a field equals to a specified value.
  """
  equalTo: Date

  """
  This is the notEqualTo operator to specify a constraint to select the objects
  where the value of a field do not equal to a specified value.
  """
  notEqualTo: Date

  """
  This is the lessThan operator to specify a constraint to select the objects
  where the value of a field is less than a specified value.
  """
  lessThan: Date

  """
  This is the lessThanOrEqualTo operator to specify a constraint to select the
  objects where the value of a field is less than or equal to a specified value.
  """
  lessThanOrEqualTo: Date

  """
  This is the greaterThan operator to specify a constraint to select the objects
  where the value of a field is greater than a specified value.
  """
  greaterThan: Date

  """
  This is the greaterThanOrEqualTo operator to specify a constraint to select
  the objects where the value of a field is greater than or equal to a specified value.
  """
  greaterThanOrEqualTo: Date

  """
  This is the in operator to specify a constraint to select the objects where
  the value of a field equals any value in the specified array.
  """
  in: [Date]

  """
  This is the notIn operator to specify a constraint to select the objects where
  the value of a field do not equal any value in the specified array.
  """
  notIn: [Date]

  """
  This is the exists operator to specify a constraint to select the objects where a field exists (or do not exist).
  """
  exists: Boolean

  """
  This is the inQueryKey operator to specify a constraint to select the objects
  where a field equals to a key in the result of a different query.
  """
  inQueryKey: SelectInput

  """
  This is the notInQueryKey operator to specify a constraint to select the
  objects where a field do not equal to a key in the result of a different query.
  """
  notInQueryKey: SelectInput
}

input DeleteClassInput {
  """This is the name of the object class."""
  name: String!
  clientMutationId: String
}

type DeleteClassPayload {
  """This is the deleted class."""
  class: Class!
  clientMutationId: String
}

input DeleteRoleInput {
  """This is the object id. You can use either the global or the object id."""
  id: ID!
  clientMutationId: String
}

type DeleteRolePayload {
  """This is the deleted object."""
  role: Role!
  clientMutationId: String
}

input DeleteUserInput {
  """This is the object id. You can use either the global or the object id."""
  id: ID!
  clientMutationId: String
}

type DeleteUserPayload {
  """This is the deleted object."""
  user: User!
  clientMutationId: String
}

"""The Element object type is used to return array items' value."""
type Element {
  """Return the value of the element in the array"""
  value: Any!
}

"""
The File scalar type is used in operations and types that involve files.
"""
scalar File

"""
The FileInfo object type is used to return the information about files.
"""
type FileInfo {
  """This is the file name."""
  name: String!

  """This is the url in which the file can be downloaded."""
  url: String!
}

"""
The FileWhereInput input type is used in operations that involve filtering objects by a field of type File.
"""
input FileWhereInput {
  """
  This is the equalTo operator to specify a constraint to select the objects
  where the value of a field equals to a specified value.
  """
  equalTo: File

  """
  This is the notEqualTo operator to specify a constraint to select the objects
  where the value of a field do not equal to a specified value.
  """
  notEqualTo: File

  """
  This is the lessThan operator to specify a constraint to select the objects
  where the value of a field is less than a specified value.
  """
  lessThan: File

  """
  This is the lessThanOrEqualTo operator to specify a constraint to select the
  objects where the value of a field is less than or equal to a specified value.
  """
  lessThanOrEqualTo: File

  """
  This is the greaterThan operator to specify a constraint to select the objects
  where the value of a field is greater than a specified value.
  """
  greaterThan: File

  """
  This is the greaterThanOrEqualTo operator to specify a constraint to select
  the objects where the value of a field is greater than or equal to a specified value.
  """
  greaterThanOrEqualTo: File

  """
  This is the in operator to specify a constraint to select the objects where
  the value of a field equals any value in the specified array.
  """
  in: [File]

  """
  This is the notIn operator to specify a constraint to select the objects where
  the value of a field do not equal any value in the specified array.
  """
  notIn: [File]

  """
  This is the exists operator to specify a constraint to select the objects where a field exists (or do not exist).
  """
  exists: Boolean

  """
  This is the matchesRegex operator to specify a constraint to select the
  objects where the value of a field matches a specified regular expression.
  """
  matchesRegex: String

  """
  This is the options operator to specify optional flags (such as "i" and "m")
  to be added to a matchesRegex operation in the same set of constraints.
  """
  options: String

  """
  This is the inQueryKey operator to specify a constraint to select the objects
  where a field equals to a key in the result of a different query.
  """
  inQueryKey: SelectInput

  """
  This is the notInQueryKey operator to specify a constraint to select the
  objects where a field do not equal to a key in the result of a different query.
  """
  notInQueryKey: SelectInput
}

"""
The GeoIntersectsInput type is used to specify a geoIntersects operation on a constraint.
"""
input GeoIntersectsInput {
  """This is the point to be specified."""
  point: GeoPointInput
}

"""
The GeoPoint object type is used to return the information about geo point fields.
"""
type GeoPoint {
  """This is the latitude."""
  latitude: Float!

  """This is the longitude."""
  longitude: Float!
}

"""
The GeoPointInput type is used in operations that involve inputting fields of type geo point.
"""
input GeoPointInput {
  """This is the latitude."""
  latitude: Float!

  """This is the longitude."""
  longitude: Float!
}

"""
The GeoPointWhereInput input type is used in operations that involve filtering objects by a field of type GeoPoint.
"""
input GeoPointWhereInput {
  """
  This is the exists operator to specify a constraint to select the objects where a field exists (or do not exist).
  """
  exists: Boolean

  """
  This is the nearSphere operator to specify a constraint to select the objects
  where the values of a geo point field is near to another geo point.
  """
  nearSphere: GeoPointInput

  """
  This is the maxDistance operator to specify a constraint to select the objects
  where the values of a geo point field is at a max distance (in radians) from
  the geo point specified in the $nearSphere operator.
  """
  maxDistance: Float

  """
  This is the maxDistanceInRadians operator to specify a constraint to select
  the objects where the values of a geo point field is at a max distance (in
  radians) from the geo point specified in the $nearSphere operator.
  """
  maxDistanceInRadians: Float

  """
  This is the maxDistanceInMiles operator to specify a constraint to select the
  objects where the values of a geo point field is at a max distance (in miles)
  from the geo point specified in the $nearSphere operator.
  """
  maxDistanceInMiles: Float

  """
  This is the maxDistanceInKilometers operator to specify a constraint to select
  the objects where the values of a geo point field is at a max distance (in
  kilometers) from the geo point specified in the $nearSphere operator.
  """
  maxDistanceInKilometers: Float

  """
  This is the within operator to specify a constraint to select the objects
  where the values of a geo point field is within a specified box.
  """
  within: WithinInput

  """
  This is the geoWithin operator to specify a constraint to select the objects
  where the values of a geo point field is within a specified polygon or sphere.
  """
  geoWithin: GeoWithinInput
}

"""
The GeoWithinInput type is used to specify a geoWithin operation on a constraint.
"""
input GeoWithinInput {
  """This is the polygon to be specified."""
  polygon: [GeoPointInput!]

  """This is the sphere to be specified."""
  centerSphere: CenterSphereInput
}

"""
The IdWhereInput input type is used in operations that involve filtering objects by an id.
"""
input IdWhereInput {
  """
  This is the equalTo operator to specify a constraint to select the objects
  where the value of a field equals to a specified value.
  """
  equalTo: ID

  """
  This is the notEqualTo operator to specify a constraint to select the objects
  where the value of a field do not equal to a specified value.
  """
  notEqualTo: ID

  """
  This is the lessThan operator to specify a constraint to select the objects
  where the value of a field is less than a specified value.
  """
  lessThan: ID

  """
  This is the lessThanOrEqualTo operator to specify a constraint to select the
  objects where the value of a field is less than or equal to a specified value.
  """
  lessThanOrEqualTo: ID

  """
  This is the greaterThan operator to specify a constraint to select the objects
  where the value of a field is greater than a specified value.
  """
  greaterThan: ID

  """
  This is the greaterThanOrEqualTo operator to specify a constraint to select
  the objects where the value of a field is greater than or equal to a specified value.
  """
  greaterThanOrEqualTo: ID

  """
  This is the in operator to specify a constraint to select the objects where
  the value of a field equals any value in the specified array.
  """
  in: [ID]

  """
  This is the notIn operator to specify a constraint to select the objects where
  the value of a field do not equal any value in the specified array.
  """
  notIn: [ID]

  """
  This is the exists operator to specify a constraint to select the objects where a field exists (or do not exist).
  """
  exists: Boolean

  """
  This is the inQueryKey operator to specify a constraint to select the objects
  where a field equals to a key in the result of a different query.
  """
  inQueryKey: SelectInput

  """
  This is the notInQueryKey operator to specify a constraint to select the
  objects where a field do not equal to a key in the result of a different query.
  """
  notInQueryKey: SelectInput
}

"""An entry from an object, i.e., a pair of key and value."""
input KeyValueInput {
  """The key used to retrieve the value of this entry."""
  key: String!

  """The value of the entry. Could be any type of scalar data."""
  value: Any!
}

input LogInInput {
  """This is the username used to log in the user."""
  username: String!

  """This is the password used to log in the user."""
  password: String!
  clientMutationId: String
}

type LogInPayload {
  """This is the existing user that was logged in and returned as a viewer."""
  viewer: Viewer!
  clientMutationId: String
}

input LogOutInput {
  clientMutationId: String
}

type LogOutPayload {
  """
  This is the existing user that was logged out and returned as a viewer.
  """
  viewer: Viewer!
  clientMutationId: String
}

"""Mutation is the top level type for mutations."""
type Mutation {
  """
  The createRole mutation can be used to create a new object of the Role class.
  """
  createRole(input: CreateRoleInput!): CreateRolePayload

  """
  The updateRole mutation can be used to update an object of the Role class.
  """
  updateRole(input: UpdateRoleInput!): UpdateRolePayload

  """
  The deleteRole mutation can be used to delete an object of the Role class.
  """
  deleteRole(input: DeleteRoleInput!): DeleteRolePayload

  """
  The createUser mutation can be used to create a new object of the User class.
  """
  createUser(input: CreateUserInput!): CreateUserPayload

  """
  The updateUser mutation can be used to update an object of the User class.
  """
  updateUser(input: UpdateUserInput!): UpdateUserPayload

  """
  The deleteUser mutation can be used to delete an object of the User class.
  """
  deleteUser(input: DeleteUserInput!): DeleteUserPayload

  """The createFile mutation can be used to create and upload a new file."""
  createFile(input: CreateFileInput!): CreateFilePayload

  """The signUp mutation can be used to create and sign up a new user."""
  signUp(input: SignUpInput!): SignUpPayload

  """The logIn mutation can be used to log in an existing user."""
  logIn(input: LogInInput!): LogInPayload

  """The logOut mutation can be used to log out an existing user."""
  logOut(input: LogOutInput!): LogOutPayload

  """
  The resetPassword mutation can be used to reset the password of an existing user.
  """
  resetPassword(input: ResetPasswordInput!): ResetPasswordPayload

  """
  The sendVerificationEmail mutation can be used to send the verification email again.
  """
  sendVerificationEmail(input: SendVerificationEmailInput!): SendVerificationEmailPayload

  """
  The createClass mutation can be used to create the schema for a new object class.
  """
  createClass(input: CreateClassInput!): CreateClassPayload

  """
  The updateClass mutation can be used to update the schema for an existing object class.
  """
  updateClass(input: UpdateClassInput!): UpdateClassPayload

  """
  The deleteClass mutation can be used to delete an existing object class.
  """
  deleteClass(input: DeleteClassInput!): DeleteClassPayload
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""
The NumberWhereInput input type is used in operations that involve filtering objects by a field of type Number.
"""
input NumberWhereInput {
  """
  This is the equalTo operator to specify a constraint to select the objects
  where the value of a field equals to a specified value.
  """
  equalTo: Float

  """
  This is the notEqualTo operator to specify a constraint to select the objects
  where the value of a field do not equal to a specified value.
  """
  notEqualTo: Float

  """
  This is the lessThan operator to specify a constraint to select the objects
  where the value of a field is less than a specified value.
  """
  lessThan: Float

  """
  This is the lessThanOrEqualTo operator to specify a constraint to select the
  objects where the value of a field is less than or equal to a specified value.
  """
  lessThanOrEqualTo: Float

  """
  This is the greaterThan operator to specify a constraint to select the objects
  where the value of a field is greater than a specified value.
  """
  greaterThan: Float

  """
  This is the greaterThanOrEqualTo operator to specify a constraint to select
  the objects where the value of a field is greater than or equal to a specified value.
  """
  greaterThanOrEqualTo: Float

  """
  This is the in operator to specify a constraint to select the objects where
  the value of a field equals any value in the specified array.
  """
  in: [Float]

  """
  This is the notIn operator to specify a constraint to select the objects where
  the value of a field do not equal any value in the specified array.
  """
  notIn: [Float]

  """
  This is the exists operator to specify a constraint to select the objects where a field exists (or do not exist).
  """
  exists: Boolean

  """
  This is the inQueryKey operator to specify a constraint to select the objects
  where a field equals to a key in the result of a different query.
  """
  inQueryKey: SelectInput

  """
  This is the notInQueryKey operator to specify a constraint to select the
  objects where a field do not equal to a key in the result of a different query.
  """
  notInQueryKey: SelectInput
}

"""
The Object scalar type is used in operations and types that involve objects.
"""
scalar Object

"""
The ObjectWhereInput input type is used in operations that involve filtering result by a field of type Object.
"""
input ObjectWhereInput {
  """
  This is the equalTo operator to specify a constraint to select the objects
  where the value of a field equals to a specified value.
  """
  equalTo: KeyValueInput

  """
  This is the notEqualTo operator to specify a constraint to select the objects
  where the value of a field do not equal to a specified value.
  """
  notEqualTo: KeyValueInput

  """
  This is the in operator to specify a constraint to select the objects where
  the value of a field equals any value in the specified array.
  """
  in: [KeyValueInput]

  """
  This is the notIn operator to specify a constraint to select the objects where
  the value of a field do not equal any value in the specified array.
  """
  notIn: [KeyValueInput]

  """
  This is the lessThan operator to specify a constraint to select the objects
  where the value of a field is less than a specified value.
  """
  lessThan: KeyValueInput

  """
  This is the lessThanOrEqualTo operator to specify a constraint to select the
  objects where the value of a field is less than or equal to a specified value.
  """
  lessThanOrEqualTo: KeyValueInput

  """
  This is the greaterThan operator to specify a constraint to select the objects
  where the value of a field is greater than a specified value.
  """
  greaterThan: KeyValueInput

  """
  This is the greaterThanOrEqualTo operator to specify a constraint to select
  the objects where the value of a field is greater than or equal to a specified value.
  """
  greaterThanOrEqualTo: KeyValueInput

  """
  This is the exists operator to specify a constraint to select the objects where a field exists (or do not exist).
  """
  exists: Boolean

  """
  This is the inQueryKey operator to specify a constraint to select the objects
  where a field equals to a key in the result of a different query.
  """
  inQueryKey: SelectInput

  """
  This is the notInQueryKey operator to specify a constraint to select the
  objects where a field do not equal to a key in the result of a different query.
  """
  notInQueryKey: SelectInput
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

"""
The ParseObject interface type is used as a base type for the auto generated object types.
"""
interface ParseObject {
  """This is the object id."""
  objectId: ID!

  """This is the date in which the object was created."""
  createdAt: Date!

  """This is the date in which the object was las updated."""
  updatedAt: Date!
  ACL: ACL!
}

"""
The PointerFieldInput is used to specify a field of type pointer for an object class schema.
"""
input PointerFieldInput {
  """This is the field name."""
  name: String!

  """This is the name of the target class for the field."""
  targetClassName: String!
}

"""
The PolygonWhereInput input type is used in operations that involve filtering objects by a field of type Polygon.
"""
input PolygonWhereInput {
  """
  This is the exists operator to specify a constraint to select the objects where a field exists (or do not exist).
  """
  exists: Boolean

  """
  This is the geoIntersects operator to specify a constraint to select the
  objects where the values of a polygon field intersect a specified point.
  """
  geoIntersects: GeoIntersectsInput
}

"""Allow to manage public rights."""
type PublicACL {
  """Allow anyone to read the current object."""
  read: Boolean

  """Allow anyone to write on the current object."""
  write: Boolean
}

"""Allow to manage public rights."""
input PublicACLInput {
  """Allow anyone to read the current object."""
  read: Boolean!

  """Allow anyone to write on the current object."""
  write: Boolean!
}

"""Query is the top level type for queries."""
type Query {
  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node

  """
  The role query can be used to get an object of the Role class by its id.
  """
  role(
    """This is the object id. You can use either the global or the object id."""
    id: ID!

    """The read options for the query to be executed."""
    options: ReadOptionsInput
  ): Role!

  """The roles query can be used to find objects of the Role class."""
  roles(
    """
    These are the conditions that the objects need to match in order to be found.
    """
    where: RoleWhereInput

    """The fields to be used when sorting the data fetched."""
    order: [RoleOrder!]

    """This is the number of objects that must be skipped to return."""
    skip: Int
    after: String
    first: Int
    before: String
    last: Int

    """The read options for the query to be executed."""
    options: ReadOptionsInput
  ): RoleConnection!

  """
  The user query can be used to get an object of the User class by its id.
  """
  user(
    """This is the object id. You can use either the global or the object id."""
    id: ID!

    """The read options for the query to be executed."""
    options: ReadOptionsInput
  ): User!

  """The users query can be used to find objects of the User class."""
  users(
    """
    These are the conditions that the objects need to match in order to be found.
    """
    where: UserWhereInput

    """The fields to be used when sorting the data fetched."""
    order: [UserOrder!]

    """This is the number of objects that must be skipped to return."""
    skip: Int
    after: String
    first: Int
    before: String
    last: Int

    """The read options for the query to be executed."""
    options: ReadOptionsInput
  ): UserConnection!

  """The health query can be used to check if the server is up and running."""
  health: Boolean!

  """The viewer query can be used to return the current user data."""
  viewer: Viewer!

  """The class query can be used to retrieve an existing object class."""
  class(
    """This is the name of the object class."""
    name: String!
  ): Class!

  """The classes query can be used to retrieve the existing object classes."""
  classes: [Class!]!
}

"""
The ReadOptionsInputt type is used in queries in order to set the read preferences.
"""
input ReadOptionsInput {
  """The read preference for the main query to be executed."""
  readPreference: ReadPreference

  """The read preference for the queries to be executed to include fields."""
  includeReadPreference: ReadPreference

  """The read preference for the subqueries that may be required."""
  subqueryReadPreference: ReadPreference
}

"""
The ReadPreference enum type is used in queries in order to select in which database replica the operation must run.
"""
enum ReadPreference {
  PRIMARY
  PRIMARY_PREFERRED
  SECONDARY
  SECONDARY_PREFERRED
  NEAREST
}

"""
The RelationFieldInput is used to specify a field of type relation for an object class schema.
"""
input RelationFieldInput {
  """This is the field name."""
  name: String!

  """This is the name of the target class for the field."""
  targetClassName: String!
}

input ResetPasswordInput {
  email: String!
  clientMutationId: String
}

type ResetPasswordPayload {
  """It's always true."""
  ok: Boolean!
  clientMutationId: String
}

"""
The Role object type is used in operations that involve outputting objects of Role class.
"""
type Role implements ParseObject & Node {
  """The ID of an object"""
  id: ID!

  """This is the object id."""
  objectId: ID!

  """This is the date in which the object was created."""
  createdAt: Date!

  """This is the date in which the object was las updated."""
  updatedAt: Date!
  ACL: ACL!

  """This is the object name."""
  name: String

  """This is the object users."""
  users(
    """
    These are the conditions that the objects need to match in order to be found.
    """
    where: UserWhereInput

    """The fields to be used when sorting the data fetched."""
    order: [UserOrder!]

    """This is the number of objects that must be skipped to return."""
    skip: Int
    after: String
    first: Int
    before: String
    last: Int

    """The read options for the query to be executed."""
    options: ReadOptionsInput
  ): UserConnection!

  """This is the object roles."""
  roles(
    """
    These are the conditions that the objects need to match in order to be found.
    """
    where: RoleWhereInput

    """The fields to be used when sorting the data fetched."""
    order: [RoleOrder!]

    """This is the number of objects that must be skipped to return."""
    skip: Int
    after: String
    first: Int
    before: String
    last: Int

    """The read options for the query to be executed."""
    options: ReadOptionsInput
  ): RoleConnection!
}

"""
Allow to manage roles in ACL. If read and write are null the role have read and write rights.
"""
type RoleACL {
  """Name of the targetted Role."""
  roleName: ID!

  """Allow users who are members of the role to read the current object."""
  read: Boolean!

  """
  Allow users who are members of the role to write on the current object.
  """
  write: Boolean!
}

"""Allow to manage roles in ACL."""
input RoleACLInput {
  """Name of the targetted Role."""
  roleName: String!

  """Allow users who are members of the role to read the current object."""
  read: Boolean!

  """
  Allow users who are members of the role to write on the current object.
  """
  write: Boolean!
}

"""A connection to a list of items."""
type RoleConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [RoleEdge]

  """
  This is the total matched objecs count that is returned when the count flag is set.
  """
  count: Int!
}

"""An edge in a connection."""
type RoleEdge {
  """The item at the end of the edge"""
  node: Role

  """A cursor for use in pagination"""
  cursor: String!
}

"""
The RoleOrder input type is used when sorting objects of the Role class.
"""
enum RoleOrder {
  objectId_ASC
  objectId_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  ACL_ASC
  ACL_DESC
  name_ASC
  name_DESC
  users_ASC
  users_DESC
  roles_ASC
  roles_DESC
  id_ASC
  id_DESC
}

"""Allow to link OR add and link an object of the Role class."""
input RolePointerInput {
  """
  Link an existing object from Role class. You can use either the global or the object id.
  """
  link: ID

  """Create and link an object from Role class."""
  createAndLink: CreateRoleFieldsInput
}

"""
Allow to add, remove, createAndAdd objects of the Role class into a relation field.
"""
input RoleRelationInput {
  """
  Add existing objects from the Role class into the relation. You can use either the global or the object ids.
  """
  add: [ID!]

  """
  Remove existing objects from the Role class out of the relation. You can use either the global or the object ids.
  """
  remove: [ID!]

  """Create and add objects of the Role class into the relation."""
  createAndAdd: [CreateRoleFieldsInput!]
}

"""
The RoleRelationWhereInput input type is used in operations that involve filtering objects of Role class.
"""
input RoleRelationWhereInput {
  """
  Run a relational/pointer query where at least one child object can match.
  """
  have: RoleWhereInput

  """
  Run an inverted relational/pointer query where at least one child object can match.
  """
  haveNot: RoleWhereInput

  """Check if the relation/pointer contains objects."""
  exists: Boolean
}

"""
The RoleWhereInput input type is used in operations that involve filtering objects of Role class.
"""
input RoleWhereInput {
  """This is the object objectId."""
  objectId: IdWhereInput

  """This is the object createdAt."""
  createdAt: DateWhereInput

  """This is the object updatedAt."""
  updatedAt: DateWhereInput

  """This is the object ACL."""
  ACL: ObjectWhereInput

  """This is the object name."""
  name: StringWhereInput

  """This is the object users."""
  users: UserRelationWhereInput

  """This is the object roles."""
  roles: RoleRelationWhereInput

  """This is the object id."""
  id: IdWhereInput

  """This is the OR operator to compound constraints."""
  OR: [RoleWhereInput!]

  """This is the AND operator to compound constraints."""
  AND: [RoleWhereInput!]

  """This is the NOR operator to compound constraints."""
  NOR: [RoleWhereInput!]
}

"""The SchemaACLField is used to return information of an ACL field."""
type SchemaACLField implements SchemaField {
  """This is the field name."""
  name: String!
}

"""The SchemaArrayField is used to return information of an Array field."""
type SchemaArrayField implements SchemaField {
  """This is the field name."""
  name: String!
}

"""
The SchemaArrayFieldInput is used to specify a field of type array for an object class schema.
"""
input SchemaArrayFieldInput {
  """This is the field name."""
  name: String!
}

"""
The SchemaBooleanField is used to return information of a Boolean field.
"""
type SchemaBooleanField implements SchemaField {
  """This is the field name."""
  name: String!
}

"""
The SchemaBooleanFieldInput is used to specify a field of type boolean for an object class schema.
"""
input SchemaBooleanFieldInput {
  """This is the field name."""
  name: String!
}

"""The SchemaBytesField is used to return information of a Bytes field."""
type SchemaBytesField implements SchemaField {
  """This is the field name."""
  name: String!
}

"""
The SchemaBytesFieldInput is used to specify a field of type bytes for an object class schema.
"""
input SchemaBytesFieldInput {
  """This is the field name."""
  name: String!
}

"""The SchemaDateField is used to return information of a Date field."""
type SchemaDateField implements SchemaField {
  """This is the field name."""
  name: String!
}

"""
The SchemaDateFieldInput is used to specify a field of type date for an object class schema.
"""
input SchemaDateFieldInput {
  """This is the field name."""
  name: String!
}

"""
The SchemaField interface type is used as a base type for the different supported fields of an object class schema.
"""
interface SchemaField {
  """This is the field name."""
  name: String!
}

"""
The SchemaFieldInput is used to specify a field of an object class schema.
"""
input SchemaFieldInput {
  """This is the field name."""
  name: String!
}

"""
The CreateClassSchemaInput type is used to specify the schema for a new object class to be created.
"""
input SchemaFieldsInput {
  """These are the String fields to be added to the class schema."""
  addStrings: [SchemaStringFieldInput!]

  """These are the Number fields to be added to the class schema."""
  addNumbers: [SchemaNumberFieldInput!]

  """These are the Boolean fields to be added to the class schema."""
  addBooleans: [SchemaBooleanFieldInput!]

  """These are the Array fields to be added to the class schema."""
  addArrays: [SchemaArrayFieldInput!]

  """These are the Object fields to be added to the class schema."""
  addObjects: [SchemaObjectFieldInput!]

  """These are the Date fields to be added to the class schema."""
  addDates: [SchemaDateFieldInput!]

  """These are the File fields to be added to the class schema."""
  addFiles: [SchemaFileFieldInput!]

  """
  This is the Geo Point field to be added to the class schema. Currently it is supported only one GeoPoint field per Class.
  """
  addGeoPoint: SchemaGeoPointFieldInput

  """These are the Polygon fields to be added to the class schema."""
  addPolygons: [SchemaPolygonFieldInput!]

  """These are the Bytes fields to be added to the class schema."""
  addBytes: [SchemaBytesFieldInput!]

  """These are the Pointer fields to be added to the class schema."""
  addPointers: [PointerFieldInput!]

  """These are the Relation fields to be added to the class schema."""
  addRelations: [RelationFieldInput!]

  """These are the fields to be removed from the class schema."""
  remove: [SchemaFieldInput!]
}

"""The SchemaFileField is used to return information of a File field."""
type SchemaFileField implements SchemaField {
  """This is the field name."""
  name: String!
}

"""
The SchemaFileFieldInput is used to specify a field of type file for an object class schema.
"""
input SchemaFileFieldInput {
  """This is the field name."""
  name: String!
}

"""
The SchemaGeoPointField is used to return information of a Geo Point field.
"""
type SchemaGeoPointField implements SchemaField {
  """This is the field name."""
  name: String!
}

"""
The SchemaGeoPointFieldInput is used to specify a field of type geo point for an object class schema.
"""
input SchemaGeoPointFieldInput {
  """This is the field name."""
  name: String!
}

"""The SchemaNumberField is used to return information of a Number field."""
type SchemaNumberField implements SchemaField {
  """This is the field name."""
  name: String!
}

"""
The SchemaNumberFieldInput is used to specify a field of type number for an object class schema.
"""
input SchemaNumberFieldInput {
  """This is the field name."""
  name: String!
}

"""
The SchemaObjectField is used to return information of an Object field.
"""
type SchemaObjectField implements SchemaField {
  """This is the field name."""
  name: String!
}

"""
The SchemaObjectFieldInput is used to specify a field of type object for an object class schema.
"""
input SchemaObjectFieldInput {
  """This is the field name."""
  name: String!
}

"""
The SchemaPointerField is used to return information of a Pointer field.
"""
type SchemaPointerField implements SchemaField {
  """This is the field name."""
  name: String!

  """This is the name of the target class for the field."""
  targetClassName: String!
}

"""
The SchemaPolygonField is used to return information of a Polygon field.
"""
type SchemaPolygonField implements SchemaField {
  """This is the field name."""
  name: String!
}

"""
The SchemaPolygonFieldInput is used to specify a field of type polygon for an object class schema.
"""
input SchemaPolygonFieldInput {
  """This is the field name."""
  name: String!
}

"""
The SchemaRelationField is used to return information of a Relation field.
"""
type SchemaRelationField implements SchemaField {
  """This is the field name."""
  name: String!

  """This is the name of the target class for the field."""
  targetClassName: String!
}

"""The SchemaStringField is used to return information of a String field."""
type SchemaStringField implements SchemaField {
  """This is the field name."""
  name: String!
}

"""
The SchemaStringFieldInput is used to specify a field of type string for an object class schema.
"""
input SchemaStringFieldInput {
  """This is the field name."""
  name: String!
}

"""
The SearchInput type is used to specifiy a search operation on a full text search.
"""
input SearchInput {
  """This is the term to be searched."""
  term: String!

  """
  This is the language to tetermine the list of stop words and the rules for tokenizer.
  """
  language: String

  """This is the flag to enable or disable case sensitive search."""
  caseSensitive: Boolean

  """This is the flag to enable or disable diacritic sensitive search."""
  diacriticSensitive: Boolean
}

"""
The SelectInput type is used to specify an inQueryKey or a notInQueryKey operation on a constraint.
"""
input SelectInput {
  """This is the subquery to be executed."""
  query: SubqueryInput!

  """
  This is the key in the result of the subquery that must match (not match) the field.
  """
  key: String!
}

input SendVerificationEmailInput {
  email: String!
  clientMutationId: String
}

type SendVerificationEmailPayload {
  """It's always true."""
  ok: Boolean!
  clientMutationId: String
}

input SignUpInput {
  userFields: CreateUserFieldsInput
  clientMutationId: String
}

type SignUpPayload {
  """
  This is the new user that was created, signed up and returned as a viewer.
  """
  viewer: Viewer!
  clientMutationId: String
}

"""
The StringWhereInput input type is used in operations that involve filtering objects by a field of type String.
"""
input StringWhereInput {
  """
  This is the equalTo operator to specify a constraint to select the objects
  where the value of a field equals to a specified value.
  """
  equalTo: String

  """
  This is the notEqualTo operator to specify a constraint to select the objects
  where the value of a field do not equal to a specified value.
  """
  notEqualTo: String

  """
  This is the lessThan operator to specify a constraint to select the objects
  where the value of a field is less than a specified value.
  """
  lessThan: String

  """
  This is the lessThanOrEqualTo operator to specify a constraint to select the
  objects where the value of a field is less than or equal to a specified value.
  """
  lessThanOrEqualTo: String

  """
  This is the greaterThan operator to specify a constraint to select the objects
  where the value of a field is greater than a specified value.
  """
  greaterThan: String

  """
  This is the greaterThanOrEqualTo operator to specify a constraint to select
  the objects where the value of a field is greater than or equal to a specified value.
  """
  greaterThanOrEqualTo: String

  """
  This is the in operator to specify a constraint to select the objects where
  the value of a field equals any value in the specified array.
  """
  in: [String]

  """
  This is the notIn operator to specify a constraint to select the objects where
  the value of a field do not equal any value in the specified array.
  """
  notIn: [String]

  """
  This is the exists operator to specify a constraint to select the objects where a field exists (or do not exist).
  """
  exists: Boolean

  """
  This is the matchesRegex operator to specify a constraint to select the
  objects where the value of a field matches a specified regular expression.
  """
  matchesRegex: String

  """
  This is the options operator to specify optional flags (such as "i" and "m")
  to be added to a matchesRegex operation in the same set of constraints.
  """
  options: String

  """This is the $text operator to specify a full text search constraint."""
  text: TextInput

  """
  This is the inQueryKey operator to specify a constraint to select the objects
  where a field equals to a key in the result of a different query.
  """
  inQueryKey: SelectInput

  """
  This is the notInQueryKey operator to specify a constraint to select the
  objects where a field do not equal to a key in the result of a different query.
  """
  notInQueryKey: SelectInput
}

"""
The SubqueryInput type is used to specify a sub query to another class.
"""
input SubqueryInput {
  """This is the class name of the object."""
  className: String!

  """
  These are the conditions that the objects need to match in order to be found
  """
  where: Object!
}

"""
The TextInput type is used to specify a text operation on a constraint.
"""
input TextInput {
  """This is the search to be executed."""
  search: SearchInput!
}

input UpdateClassInput {
  """This is the name of the object class."""
  name: String!

  """These are the schema's fields of the object class."""
  schemaFields: SchemaFieldsInput
  clientMutationId: String
}

type UpdateClassPayload {
  """This is the updated class."""
  class: Class!
  clientMutationId: String
}

"""
The UpdateRoleFieldsInput input type is used in operations that involve creation of objects in the Role class.
"""
input UpdateRoleFieldsInput {
  ACL: ACLInput

  """This is the object name."""
  name: String

  """This is the object users."""
  users: UserRelationInput

  """This is the object roles."""
  roles: RoleRelationInput
}

input UpdateRoleInput {
  """This is the object id. You can use either the global or the object id."""
  id: ID!

  """These are the fields that will be used to update the object."""
  fields: UpdateRoleFieldsInput
  clientMutationId: String
}

type UpdateRolePayload {
  """This is the updated object."""
  role: Role!
  clientMutationId: String
}

"""
The UpdateUserFieldsInput input type is used in operations that involve creation of objects in the User class.
"""
input UpdateUserFieldsInput {
  ACL: ACLInput

  """This is the object username."""
  username: String

  """This is the object password."""
  password: String

  """This is the object email."""
  email: String

  """This is the object emailVerified."""
  emailVerified: Boolean

  """This is the object authData."""
  authData: Object

  """This is the object firstname."""
  firstname: String

  """This is the object lastname."""
  lastname: String

  """This is the object picture."""
  picture: File
}

input UpdateUserInput {
  """This is the object id. You can use either the global or the object id."""
  id: ID!

  """These are the fields that will be used to update the object."""
  fields: UpdateUserFieldsInput
  clientMutationId: String
}

type UpdateUserPayload {
  """This is the updated object."""
  user: User!
  clientMutationId: String
}

"""The Upload scalar type represents a file upload."""
scalar Upload

"""
The User object type is used in operations that involve outputting objects of User class.
"""
type User implements ParseObject & Node {
  """The ID of an object"""
  id: ID!

  """This is the object id."""
  objectId: ID!

  """This is the date in which the object was created."""
  createdAt: Date!

  """This is the date in which the object was las updated."""
  updatedAt: Date!
  ACL: ACL!

  """This is the object username."""
  username: String

  """This is the object email."""
  email: String

  """This is the object emailVerified."""
  emailVerified: Boolean

  """This is the object authData."""
  authData: Object

  """This is the object firstname."""
  firstname: String

  """This is the object lastname."""
  lastname: String

  """This is the object picture."""
  picture: FileInfo
}

"""
Allow to manage users in ACL. If read and write are null the users have read and write rights.
"""
type UserACL {
  """ID of the targetted User."""
  userId: ID!

  """Allow the user to read the current object."""
  read: Boolean!

  """Allow the user to write on the current object."""
  write: Boolean!
}

"""Allow to manage users in ACL."""
input UserACLInput {
  """ID of the targetted User."""
  userId: ID!

  """Allow the user to read the current object."""
  read: Boolean!

  """Allow the user to write on the current object."""
  write: Boolean!
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]

  """
  This is the total matched objecs count that is returned when the count flag is set.
  """
  count: Int!
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge"""
  node: User

  """A cursor for use in pagination"""
  cursor: String!
}

"""
The UserOrder input type is used when sorting objects of the User class.
"""
enum UserOrder {
  objectId_ASC
  objectId_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  ACL_ASC
  ACL_DESC
  username_ASC
  username_DESC
  password_ASC
  password_DESC
  email_ASC
  email_DESC
  emailVerified_ASC
  emailVerified_DESC
  authData_ASC
  authData_DESC
  firstname_ASC
  firstname_DESC
  lastname_ASC
  lastname_DESC
  picture_ASC
  picture_DESC
  id_ASC
  id_DESC
}

"""Allow to link OR add and link an object of the User class."""
input UserPointerInput {
  """
  Link an existing object from User class. You can use either the global or the object id.
  """
  link: ID

  """Create and link an object from User class."""
  createAndLink: CreateUserFieldsInput
}

"""
Allow to add, remove, createAndAdd objects of the User class into a relation field.
"""
input UserRelationInput {
  """
  Add existing objects from the User class into the relation. You can use either the global or the object ids.
  """
  add: [ID!]

  """
  Remove existing objects from the User class out of the relation. You can use either the global or the object ids.
  """
  remove: [ID!]

  """Create and add objects of the User class into the relation."""
  createAndAdd: [CreateUserFieldsInput!]
}

"""
The UserRelationWhereInput input type is used in operations that involve filtering objects of User class.
"""
input UserRelationWhereInput {
  """
  Run a relational/pointer query where at least one child object can match.
  """
  have: UserWhereInput

  """
  Run an inverted relational/pointer query where at least one child object can match.
  """
  haveNot: UserWhereInput

  """Check if the relation/pointer contains objects."""
  exists: Boolean
}

"""
The UserWhereInput input type is used in operations that involve filtering objects of User class.
"""
input UserWhereInput {
  """This is the object objectId."""
  objectId: IdWhereInput

  """This is the object createdAt."""
  createdAt: DateWhereInput

  """This is the object updatedAt."""
  updatedAt: DateWhereInput

  """This is the object ACL."""
  ACL: ObjectWhereInput

  """This is the object username."""
  username: StringWhereInput

  """This is the object password."""
  password: StringWhereInput

  """This is the object email."""
  email: StringWhereInput

  """This is the object emailVerified."""
  emailVerified: BooleanWhereInput

  """This is the object authData."""
  authData: ObjectWhereInput

  """This is the object firstname."""
  firstname: StringWhereInput

  """This is the object lastname."""
  lastname: StringWhereInput

  """This is the object picture."""
  picture: FileWhereInput

  """This is the object id."""
  id: IdWhereInput

  """This is the OR operator to compound constraints."""
  OR: [UserWhereInput!]

  """This is the AND operator to compound constraints."""
  AND: [UserWhereInput!]

  """This is the NOR operator to compound constraints."""
  NOR: [UserWhereInput!]
}

"""
The Viewer object type is used in operations that involve outputting the current user data.
"""
type Viewer {
  """The current user session token."""
  sessionToken: String!

  """This is the current user."""
  user: User!
}

"""
The WithinInput type is used to specify a within operation on a constraint.
"""
input WithinInput {
  """This is the box to be specified."""
  box: BoxInput!
}

`