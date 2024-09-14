### Group
A <group> in Three.js and React Three Fiber is a container for other 3D objects.
It's similar to a <div> in HTML, but for 3D space.
Key points about <group>:
- It allows you to organize and manipulate multiple 3D objects together.
- Transformations (position, rotation, scale) applied to a group affect all its children.
- It doesn't render anything visible by itself; it's purely for organization and hierarchical transformations.
- Useful for creating complex scenes with multiple related objects.
- In React Three Fiber, it's a wrapper around Three.js's Group object.


### Dispose
- The 'dispose' prop, when set to null, prevents automatic disposal of the group's resources.
- This is useful when you want to manage the disposal manually or when the group's contents are expected to persist throughout the application's lifecycle.
- In Three.js, 'dispose' is typically used to free up memory and GPU resources associated with 3D objects when they're no longer needed. By setting it to null, we're indicating that we don't want automatic disposal for this group.


### Position
- The 'position' prop in a <group> sets its 3D coordinates in the scene
- It takes an array of three numbers: [x, y, z]
- [0, 0, 0] places the group at the center of the scene
- Changing these values would move the entire group and its contents
- For example, position={[1, 2, -3]} would move it right, up, and backward