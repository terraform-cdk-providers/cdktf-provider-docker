# API Reference

**Classes**

Name|Description
----|-----------
[Config](#cdktf-provider-docker-config)|Represents a {@link https://www.terraform.io/docs/providers/docker/r/config.html docker_config}.
[Container](#cdktf-provider-docker-container)|Represents a {@link https://www.terraform.io/docs/providers/docker/r/container.html docker_container}.
[ContainerNetworkData](#cdktf-provider-docker-containernetworkdata)|*No description*
[DataDockerImage](#cdktf-provider-docker-datadockerimage)|Represents a {@link https://www.terraform.io/docs/providers/docker/d/image.html docker_image}.
[DataDockerNetwork](#cdktf-provider-docker-datadockernetwork)|Represents a {@link https://www.terraform.io/docs/providers/docker/d/network.html docker_network}.
[DataDockerNetworkIpamConfig](#cdktf-provider-docker-datadockernetworkipamconfig)|*No description*
[DataDockerPlugin](#cdktf-provider-docker-datadockerplugin)|Represents a {@link https://www.terraform.io/docs/providers/docker/d/plugin.html docker_plugin}.
[DataDockerRegistryImage](#cdktf-provider-docker-datadockerregistryimage)|Represents a {@link https://www.terraform.io/docs/providers/docker/d/registry_image.html docker_registry_image}.
[DockerProvider](#cdktf-provider-docker-dockerprovider)|Represents a {@link https://www.terraform.io/docs/providers/docker docker}.
[Image](#cdktf-provider-docker-image)|Represents a {@link https://www.terraform.io/docs/providers/docker/r/image.html docker_image}.
[Network](#cdktf-provider-docker-network)|Represents a {@link https://www.terraform.io/docs/providers/docker/r/network.html docker_network}.
[Plugin](#cdktf-provider-docker-plugin)|Represents a {@link https://www.terraform.io/docs/providers/docker/r/plugin.html docker_plugin}.
[RegistryImage](#cdktf-provider-docker-registryimage)|Represents a {@link https://www.terraform.io/docs/providers/docker/r/registry_image.html docker_registry_image}.
[Secret](#cdktf-provider-docker-secret)|Represents a {@link https://www.terraform.io/docs/providers/docker/r/secret.html docker_secret}.
[Service](#cdktf-provider-docker-service)|Represents a {@link https://www.terraform.io/docs/providers/docker/r/service.html docker_service}.
[Volume](#cdktf-provider-docker-volume)|Represents a {@link https://www.terraform.io/docs/providers/docker/r/volume.html docker_volume}.


**Structs**

Name|Description
----|-----------
[ConfigConfig](#cdktf-provider-docker-configconfig)|*No description*
[ContainerCapabilities](#cdktf-provider-docker-containercapabilities)|*No description*
[ContainerConfig](#cdktf-provider-docker-containerconfig)|*No description*
[ContainerDevices](#cdktf-provider-docker-containerdevices)|*No description*
[ContainerHealthcheck](#cdktf-provider-docker-containerhealthcheck)|*No description*
[ContainerHost](#cdktf-provider-docker-containerhost)|*No description*
[ContainerLabels](#cdktf-provider-docker-containerlabels)|*No description*
[ContainerMounts](#cdktf-provider-docker-containermounts)|*No description*
[ContainerMountsBindOptions](#cdktf-provider-docker-containermountsbindoptions)|*No description*
[ContainerMountsTmpfsOptions](#cdktf-provider-docker-containermountstmpfsoptions)|*No description*
[ContainerMountsVolumeOptions](#cdktf-provider-docker-containermountsvolumeoptions)|*No description*
[ContainerMountsVolumeOptionsLabels](#cdktf-provider-docker-containermountsvolumeoptionslabels)|*No description*
[ContainerNetworksAdvanced](#cdktf-provider-docker-containernetworksadvanced)|*No description*
[ContainerPorts](#cdktf-provider-docker-containerports)|*No description*
[ContainerUlimit](#cdktf-provider-docker-containerulimit)|*No description*
[ContainerUpload](#cdktf-provider-docker-containerupload)|*No description*
[ContainerVolumes](#cdktf-provider-docker-containervolumes)|*No description*
[DataDockerImageConfig](#cdktf-provider-docker-datadockerimageconfig)|*No description*
[DataDockerNetworkConfig](#cdktf-provider-docker-datadockernetworkconfig)|*No description*
[DataDockerPluginConfig](#cdktf-provider-docker-datadockerpluginconfig)|*No description*
[DataDockerRegistryImageConfig](#cdktf-provider-docker-datadockerregistryimageconfig)|*No description*
[DockerProviderConfig](#cdktf-provider-docker-dockerproviderconfig)|*No description*
[DockerProviderRegistryAuth](#cdktf-provider-docker-dockerproviderregistryauth)|*No description*
[ImageBuild](#cdktf-provider-docker-imagebuild)|*No description*
[ImageConfig](#cdktf-provider-docker-imageconfig)|*No description*
[NetworkConfig](#cdktf-provider-docker-networkconfig)|*No description*
[NetworkIpamConfig](#cdktf-provider-docker-networkipamconfig)|*No description*
[NetworkLabels](#cdktf-provider-docker-networklabels)|*No description*
[PluginConfig](#cdktf-provider-docker-pluginconfig)|*No description*
[PluginGrantPermissions](#cdktf-provider-docker-plugingrantpermissions)|*No description*
[RegistryImageBuild](#cdktf-provider-docker-registryimagebuild)|*No description*
[RegistryImageBuildAuthConfig](#cdktf-provider-docker-registryimagebuildauthconfig)|*No description*
[RegistryImageBuildUlimit](#cdktf-provider-docker-registryimagebuildulimit)|*No description*
[RegistryImageConfig](#cdktf-provider-docker-registryimageconfig)|*No description*
[SecretConfig](#cdktf-provider-docker-secretconfig)|*No description*
[SecretLabels](#cdktf-provider-docker-secretlabels)|*No description*
[ServiceAuth](#cdktf-provider-docker-serviceauth)|*No description*
[ServiceConfig](#cdktf-provider-docker-serviceconfig)|*No description*
[ServiceConvergeConfig](#cdktf-provider-docker-serviceconvergeconfig)|*No description*
[ServiceEndpointSpec](#cdktf-provider-docker-serviceendpointspec)|*No description*
[ServiceEndpointSpecPorts](#cdktf-provider-docker-serviceendpointspecports)|*No description*
[ServiceLabels](#cdktf-provider-docker-servicelabels)|*No description*
[ServiceMode](#cdktf-provider-docker-servicemode)|*No description*
[ServiceModeReplicated](#cdktf-provider-docker-servicemodereplicated)|*No description*
[ServiceRollbackConfig](#cdktf-provider-docker-servicerollbackconfig)|*No description*
[ServiceTaskSpec](#cdktf-provider-docker-servicetaskspec)|*No description*
[ServiceTaskSpecContainerSpec](#cdktf-provider-docker-servicetaskspeccontainerspec)|*No description*
[ServiceTaskSpecContainerSpecConfigs](#cdktf-provider-docker-servicetaskspeccontainerspecconfigs)|*No description*
[ServiceTaskSpecContainerSpecDnsConfig](#cdktf-provider-docker-servicetaskspeccontainerspecdnsconfig)|*No description*
[ServiceTaskSpecContainerSpecHealthcheck](#cdktf-provider-docker-servicetaskspeccontainerspechealthcheck)|*No description*
[ServiceTaskSpecContainerSpecHosts](#cdktf-provider-docker-servicetaskspeccontainerspechosts)|*No description*
[ServiceTaskSpecContainerSpecLabels](#cdktf-provider-docker-servicetaskspeccontainerspeclabels)|*No description*
[ServiceTaskSpecContainerSpecMounts](#cdktf-provider-docker-servicetaskspeccontainerspecmounts)|*No description*
[ServiceTaskSpecContainerSpecMountsBindOptions](#cdktf-provider-docker-servicetaskspeccontainerspecmountsbindoptions)|*No description*
[ServiceTaskSpecContainerSpecMountsTmpfsOptions](#cdktf-provider-docker-servicetaskspeccontainerspecmountstmpfsoptions)|*No description*
[ServiceTaskSpecContainerSpecMountsVolumeOptions](#cdktf-provider-docker-servicetaskspeccontainerspecmountsvolumeoptions)|*No description*
[ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels](#cdktf-provider-docker-servicetaskspeccontainerspecmountsvolumeoptionslabels)|*No description*
[ServiceTaskSpecContainerSpecPrivileges](#cdktf-provider-docker-servicetaskspeccontainerspecprivileges)|*No description*
[ServiceTaskSpecContainerSpecPrivilegesCredentialSpec](#cdktf-provider-docker-servicetaskspeccontainerspecprivilegescredentialspec)|*No description*
[ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext](#cdktf-provider-docker-servicetaskspeccontainerspecprivilegesselinuxcontext)|*No description*
[ServiceTaskSpecContainerSpecSecrets](#cdktf-provider-docker-servicetaskspeccontainerspecsecrets)|*No description*
[ServiceTaskSpecLogDriver](#cdktf-provider-docker-servicetaskspeclogdriver)|*No description*
[ServiceTaskSpecPlacement](#cdktf-provider-docker-servicetaskspecplacement)|*No description*
[ServiceTaskSpecPlacementPlatforms](#cdktf-provider-docker-servicetaskspecplacementplatforms)|*No description*
[ServiceTaskSpecResources](#cdktf-provider-docker-servicetaskspecresources)|*No description*
[ServiceTaskSpecResourcesLimits](#cdktf-provider-docker-servicetaskspecresourceslimits)|*No description*
[ServiceTaskSpecResourcesReservation](#cdktf-provider-docker-servicetaskspecresourcesreservation)|*No description*
[ServiceTaskSpecResourcesReservationGenericResources](#cdktf-provider-docker-servicetaskspecresourcesreservationgenericresources)|*No description*
[ServiceTaskSpecRestartPolicy](#cdktf-provider-docker-servicetaskspecrestartpolicy)|*No description*
[ServiceUpdateConfig](#cdktf-provider-docker-serviceupdateconfig)|*No description*
[VolumeConfig](#cdktf-provider-docker-volumeconfig)|*No description*
[VolumeLabels](#cdktf-provider-docker-volumelabels)|*No description*



## class Config  <a id="cdktf-provider-docker-config"></a>

Represents a {@link https://www.terraform.io/docs/providers/docker/r/config.html docker_config}.

__Implements__: [IConstruct](#constructs-iconstruct), [ITerraformResource](#cdktf-iterraformresource), [ITerraformDependable](#cdktf-iterraformdependable)
__Extends__: [TerraformResource](#cdktf-terraformresource)

### Initializer


Create a new {@link https://www.terraform.io/docs/providers/docker/r/config.html docker_config} Resource.

```ts
new Config(scope: Construct, id: string, config: ConfigConfig)
```

* **scope** (<code>[Construct](#constructs-construct)</code>)  The scope in which to define this construct.
* **id** (<code>string</code>)  The scoped construct ID.
* **config** (<code>[ConfigConfig](#cdktf-provider-docker-configconfig)</code>)  *No description*
  * **count** (<code>number</code>)  *No description* __*Optional*__
  * **dependsOn** (<code>Array<[ITerraformDependable](#cdktf-iterraformdependable)></code>)  *No description* __*Optional*__
  * **lifecycle** (<code>[TerraformResourceLifecycle](#cdktf-terraformresourcelifecycle)</code>)  *No description* __*Optional*__
  * **provider** (<code>[TerraformProvider](#cdktf-terraformprovider)</code>)  *No description* __*Optional*__
  * **data** (<code>string</code>)  Base64-url-safe-encoded config data. 
  * **name** (<code>string</code>)  User-defined name of the config. 



### Properties


Name | Type | Description 
-----|------|-------------
**data** | <code>string</code> | <span></span>
**dataInput** | <code>string</code> | <span></span>
**id** | <code>string</code> | <span></span>
**name** | <code>string</code> | <span></span>
**nameInput** | <code>string</code> | <span></span>

### Methods


#### protected synthesizeAttributes() <a id="cdktf-provider-docker-config-synthesizeattributes"></a>



```ts
protected synthesizeAttributes(): Map<string, any>
```


__Returns__:
* <code>Map<string, any></code>



## class Container  <a id="cdktf-provider-docker-container"></a>

Represents a {@link https://www.terraform.io/docs/providers/docker/r/container.html docker_container}.

__Implements__: [IConstruct](#constructs-iconstruct), [ITerraformResource](#cdktf-iterraformresource), [ITerraformDependable](#cdktf-iterraformdependable)
__Extends__: [TerraformResource](#cdktf-terraformresource)

### Initializer


Create a new {@link https://www.terraform.io/docs/providers/docker/r/container.html docker_container} Resource.

```ts
new Container(scope: Construct, id: string, config: ContainerConfig)
```

* **scope** (<code>[Construct](#constructs-construct)</code>)  The scope in which to define this construct.
* **id** (<code>string</code>)  The scoped construct ID.
* **config** (<code>[ContainerConfig](#cdktf-provider-docker-containerconfig)</code>)  *No description*
  * **count** (<code>number</code>)  *No description* __*Optional*__
  * **dependsOn** (<code>Array<[ITerraformDependable](#cdktf-iterraformdependable)></code>)  *No description* __*Optional*__
  * **lifecycle** (<code>[TerraformResourceLifecycle](#cdktf-terraformresourcelifecycle)</code>)  *No description* __*Optional*__
  * **provider** (<code>[TerraformProvider](#cdktf-terraformprovider)</code>)  *No description* __*Optional*__
  * **image** (<code>string</code>)  The ID of the image to back this container. 
  * **name** (<code>string</code>)  The name of the container. 
  * **attach** (<code>boolean</code>)  If `true` attach to the container after its creation and waits the end of its execution. Defaults to `false`. __*Optional*__
  * **capabilities** (<code>Array<[ContainerCapabilities](#cdktf-provider-docker-containercapabilities)></code>)  capabilities block. __*Optional*__
  * **command** (<code>Array<string></code>)  The command to use to start the container. __*Optional*__
  * **cpuSet** (<code>string</code>)  A comma-separated list or hyphen-separated range of CPUs a container can use, e.g. `0-1`. __*Optional*__
  * **cpuShares** (<code>number</code>)  CPU shares (relative weight) for the container. __*Optional*__
  * **destroyGraceSeconds** (<code>number</code>)  If defined will attempt to stop the container before destroying. __*Optional*__
  * **devices** (<code>Array<[ContainerDevices](#cdktf-provider-docker-containerdevices)></code>)  devices block. __*Optional*__
  * **dns** (<code>Array<string></code>)  DNS servers to use. __*Optional*__
  * **dnsOpts** (<code>Array<string></code>)  DNS options used by the DNS provider(s), see `resolv.conf` documentation for valid list of options. __*Optional*__
  * **dnsSearch** (<code>Array<string></code>)  DNS search domains that are used when bare unqualified hostnames are used inside of the container. __*Optional*__
  * **domainname** (<code>string</code>)  Domain name of the container. __*Optional*__
  * **entrypoint** (<code>Array<string></code>)  The command to use as the Entrypoint for the container. __*Optional*__
  * **env** (<code>Array<string></code>)  Environment variables to set in the form of `KEY=VALUE`, e.g. `DEBUG=0`. __*Optional*__
  * **groupAdd** (<code>Array<string></code>)  Additional groups for the container user. __*Optional*__
  * **healthcheck** (<code>Array<[ContainerHealthcheck](#cdktf-provider-docker-containerhealthcheck)></code>)  healthcheck block. __*Optional*__
  * **host** (<code>Array<[ContainerHost](#cdktf-provider-docker-containerhost)></code>)  host block. __*Optional*__
  * **hostname** (<code>string</code>)  Hostname of the container. __*Optional*__
  * **init** (<code>boolean</code>)  Configured whether an init process should be injected for this container. __*Optional*__
  * **ipcMode** (<code>string</code>)  IPC sharing mode for the container. Possible values are: `none`, `private`, `shareable`, `container:<name|id>` or `host`. __*Optional*__
  * **labels** (<code>Array<[ContainerLabels](#cdktf-provider-docker-containerlabels)></code>)  labels block. __*Optional*__
  * **links** (<code>Array<string></code>)  Set of links for link based connectivity between containers that are running on the same host. __*Optional*__
  * **logDriver** (<code>string</code>)  The logging driver to use for the container. Defaults to `json-file`. __*Optional*__
  * **logOpts** (<code>Map<string, string></code>)  Key/value pairs to use as options for the logging driver. __*Optional*__
  * **logs** (<code>boolean</code>)  Save the container logs (`attach` must be enabled). Defaults to `false`. __*Optional*__
  * **maxRetryCount** (<code>number</code>)  The maximum amount of times to an attempt a restart when `restart` is set to 'on-failure'. __*Optional*__
  * **memory** (<code>number</code>)  The memory limit for the container in MBs. __*Optional*__
  * **memorySwap** (<code>number</code>)  The total memory limit (memory + swap) for the container in MBs. __*Optional*__
  * **mounts** (<code>Array<[ContainerMounts](#cdktf-provider-docker-containermounts)></code>)  mounts block. __*Optional*__
  * **mustRun** (<code>boolean</code>)  If `true`, then the Docker container will be kept running. __*Optional*__
  * **networkAlias** (<code>Array<string></code>)  Set an alias for the container in all specified networks. __*Optional*__
  * **networkMode** (<code>string</code>)  Network mode of the container. __*Optional*__
  * **networks** (<code>Array<string></code>)  ID of the networks in which the container is. __*Optional*__
  * **networksAdvanced** (<code>Array<[ContainerNetworksAdvanced](#cdktf-provider-docker-containernetworksadvanced)></code>)  networks_advanced block. __*Optional*__
  * **pidMode** (<code>string</code>)  he PID (Process) Namespace mode for the container. Either `container:<name|id>` or `host`. __*Optional*__
  * **ports** (<code>Array<[ContainerPorts](#cdktf-provider-docker-containerports)></code>)  ports block. __*Optional*__
  * **privileged** (<code>boolean</code>)  If `true`, the container runs in privileged mode. __*Optional*__
  * **publishAllPorts** (<code>boolean</code>)  Publish all ports of the container. __*Optional*__
  * **readOnly** (<code>boolean</code>)  If `true`, the container will be started as readonly. Defaults to `false`. __*Optional*__
  * **removeVolumes** (<code>boolean</code>)  If `true`, it will remove anonymous volumes associated with the container. Defaults to `true`. __*Optional*__
  * **restart** (<code>string</code>)  The restart policy for the container. Must be one of 'no', 'on-failure', 'always', 'unless-stopped'. Defaults to `no`. __*Optional*__
  * **rm** (<code>boolean</code>)  If `true`, then the container will be automatically removed after his execution. __*Optional*__
  * **securityOpts** (<code>Array<string></code>)  List of string values to customize labels for MLS systems, such as SELinux. See https://docs.docker.com/engine/reference/run/#security-configuration. __*Optional*__
  * **shmSize** (<code>number</code>)  Size of `/dev/shm` in MBs. __*Optional*__
  * **start** (<code>boolean</code>)  If `true`, then the Docker container will be started after creation. __*Optional*__
  * **stdinOpen** (<code>boolean</code>)  If `true`, keep STDIN open even if not attached (`docker run -i`). Defaults to `false`. __*Optional*__
  * **sysctls** (<code>Map<string, string></code>)  A map of kernel parameters (sysctls) to set in the container. __*Optional*__
  * **tmpfs** (<code>Map<string, string></code>)  A map of container directories which should be replaced by `tmpfs mounts`, and their corresponding mount options. __*Optional*__
  * **tty** (<code>boolean</code>)  If `true`, allocate a pseudo-tty (`docker run -t`). Defaults to `false`. __*Optional*__
  * **ulimit** (<code>Array<[ContainerUlimit](#cdktf-provider-docker-containerulimit)></code>)  ulimit block. __*Optional*__
  * **upload** (<code>Array<[ContainerUpload](#cdktf-provider-docker-containerupload)></code>)  upload block. __*Optional*__
  * **user** (<code>string</code>)  User used for run the first process. __*Optional*__
  * **usernsMode** (<code>string</code>)  Sets the usernamespace mode for the container when usernamespace remapping option is enabled. __*Optional*__
  * **volumes** (<code>Array<[ContainerVolumes](#cdktf-provider-docker-containervolumes)></code>)  volumes block. __*Optional*__
  * **workingDir** (<code>string</code>)  The working directory for commands to run in. __*Optional*__



### Properties


Name | Type | Description 
-----|------|-------------
**attach** | <code>boolean</code> | <span></span>
**bridge** | <code>string</code> | <span></span>
**capabilities** | <code>Array<[ContainerCapabilities](#cdktf-provider-docker-containercapabilities)></code> | <span></span>
**command** | <code>Array<string></code> | <span></span>
**containerLogs** | <code>string</code> | <span></span>
**cpuSet** | <code>string</code> | <span></span>
**cpuShares** | <code>number</code> | <span></span>
**destroyGraceSeconds** | <code>number</code> | <span></span>
**devices** | <code>Array<[ContainerDevices](#cdktf-provider-docker-containerdevices)></code> | <span></span>
**dns** | <code>Array<string></code> | <span></span>
**dnsOpts** | <code>Array<string></code> | <span></span>
**dnsSearch** | <code>Array<string></code> | <span></span>
**domainname** | <code>string</code> | <span></span>
**entrypoint** | <code>Array<string></code> | <span></span>
**env** | <code>Array<string></code> | <span></span>
**exitCode** | <code>number</code> | <span></span>
**gateway** | <code>string</code> | <span></span>
**groupAdd** | <code>Array<string></code> | <span></span>
**healthcheck** | <code>Array<[ContainerHealthcheck](#cdktf-provider-docker-containerhealthcheck)></code> | <span></span>
**host** | <code>Array<[ContainerHost](#cdktf-provider-docker-containerhost)></code> | <span></span>
**hostname** | <code>string</code> | <span></span>
**id** | <code>string</code> | <span></span>
**image** | <code>string</code> | <span></span>
**imageInput** | <code>string</code> | <span></span>
**init** | <code>boolean</code> | <span></span>
**ipAddress** | <code>string</code> | <span></span>
**ipPrefixLength** | <code>number</code> | <span></span>
**ipcMode** | <code>string</code> | <span></span>
**labels** | <code>Array<[ContainerLabels](#cdktf-provider-docker-containerlabels)></code> | <span></span>
**links** | <code>Array<string></code> | <span></span>
**logDriver** | <code>string</code> | <span></span>
**logOpts** | <code>Map<string, string></code> | <span></span>
**logs** | <code>boolean</code> | <span></span>
**maxRetryCount** | <code>number</code> | <span></span>
**memory** | <code>number</code> | <span></span>
**memorySwap** | <code>number</code> | <span></span>
**mounts** | <code>Array<[ContainerMounts](#cdktf-provider-docker-containermounts)></code> | <span></span>
**mustRun** | <code>boolean</code> | <span></span>
**name** | <code>string</code> | <span></span>
**nameInput** | <code>string</code> | <span></span>
**networkAlias** | <code>Array<string></code> | <span></span>
**networkMode** | <code>string</code> | <span></span>
**networks** | <code>Array<string></code> | <span></span>
**networksAdvanced** | <code>Array<[ContainerNetworksAdvanced](#cdktf-provider-docker-containernetworksadvanced)></code> | <span></span>
**pidMode** | <code>string</code> | <span></span>
**ports** | <code>Array<[ContainerPorts](#cdktf-provider-docker-containerports)></code> | <span></span>
**privileged** | <code>boolean</code> | <span></span>
**publishAllPorts** | <code>boolean</code> | <span></span>
**readOnly** | <code>boolean</code> | <span></span>
**removeVolumes** | <code>boolean</code> | <span></span>
**restart** | <code>string</code> | <span></span>
**rm** | <code>boolean</code> | <span></span>
**securityOpts** | <code>Array<string></code> | <span></span>
**shmSize** | <code>number</code> | <span></span>
**start** | <code>boolean</code> | <span></span>
**stdinOpen** | <code>boolean</code> | <span></span>
**sysctls** | <code>Map<string, string></code> | <span></span>
**tmpfs** | <code>Map<string, string></code> | <span></span>
**tty** | <code>boolean</code> | <span></span>
**ulimit** | <code>Array<[ContainerUlimit](#cdktf-provider-docker-containerulimit)></code> | <span></span>
**upload** | <code>Array<[ContainerUpload](#cdktf-provider-docker-containerupload)></code> | <span></span>
**user** | <code>string</code> | <span></span>
**usernsMode** | <code>string</code> | <span></span>
**volumes** | <code>Array<[ContainerVolumes](#cdktf-provider-docker-containervolumes)></code> | <span></span>
**workingDir** | <code>string</code> | <span></span>
**attachInput**? | <code>boolean</code> | __*Optional*__
**capabilitiesInput**? | <code>Array<[ContainerCapabilities](#cdktf-provider-docker-containercapabilities)></code> | __*Optional*__
**commandInput**? | <code>Array<string></code> | __*Optional*__
**cpuSetInput**? | <code>string</code> | __*Optional*__
**cpuSharesInput**? | <code>number</code> | __*Optional*__
**destroyGraceSecondsInput**? | <code>number</code> | __*Optional*__
**devicesInput**? | <code>Array<[ContainerDevices](#cdktf-provider-docker-containerdevices)></code> | __*Optional*__
**dnsInput**? | <code>Array<string></code> | __*Optional*__
**dnsOptsInput**? | <code>Array<string></code> | __*Optional*__
**dnsSearchInput**? | <code>Array<string></code> | __*Optional*__
**domainnameInput**? | <code>string</code> | __*Optional*__
**entrypointInput**? | <code>Array<string></code> | __*Optional*__
**envInput**? | <code>Array<string></code> | __*Optional*__
**groupAddInput**? | <code>Array<string></code> | __*Optional*__
**healthcheckInput**? | <code>Array<[ContainerHealthcheck](#cdktf-provider-docker-containerhealthcheck)></code> | __*Optional*__
**hostInput**? | <code>Array<[ContainerHost](#cdktf-provider-docker-containerhost)></code> | __*Optional*__
**hostnameInput**? | <code>string</code> | __*Optional*__
**initInput**? | <code>boolean</code> | __*Optional*__
**ipcModeInput**? | <code>string</code> | __*Optional*__
**labelsInput**? | <code>Array<[ContainerLabels](#cdktf-provider-docker-containerlabels)></code> | __*Optional*__
**linksInput**? | <code>Array<string></code> | __*Optional*__
**logDriverInput**? | <code>string</code> | __*Optional*__
**logOptsInput**? | <code>Map<string, string></code> | __*Optional*__
**logsInput**? | <code>boolean</code> | __*Optional*__
**maxRetryCountInput**? | <code>number</code> | __*Optional*__
**memoryInput**? | <code>number</code> | __*Optional*__
**memorySwapInput**? | <code>number</code> | __*Optional*__
**mountsInput**? | <code>Array<[ContainerMounts](#cdktf-provider-docker-containermounts)></code> | __*Optional*__
**mustRunInput**? | <code>boolean</code> | __*Optional*__
**networkAliasInput**? | <code>Array<string></code> | __*Optional*__
**networkModeInput**? | <code>string</code> | __*Optional*__
**networksAdvancedInput**? | <code>Array<[ContainerNetworksAdvanced](#cdktf-provider-docker-containernetworksadvanced)></code> | __*Optional*__
**networksInput**? | <code>Array<string></code> | __*Optional*__
**pidModeInput**? | <code>string</code> | __*Optional*__
**portsInput**? | <code>Array<[ContainerPorts](#cdktf-provider-docker-containerports)></code> | __*Optional*__
**privilegedInput**? | <code>boolean</code> | __*Optional*__
**publishAllPortsInput**? | <code>boolean</code> | __*Optional*__
**readOnlyInput**? | <code>boolean</code> | __*Optional*__
**removeVolumesInput**? | <code>boolean</code> | __*Optional*__
**restartInput**? | <code>string</code> | __*Optional*__
**rmInput**? | <code>boolean</code> | __*Optional*__
**securityOptsInput**? | <code>Array<string></code> | __*Optional*__
**shmSizeInput**? | <code>number</code> | __*Optional*__
**startInput**? | <code>boolean</code> | __*Optional*__
**stdinOpenInput**? | <code>boolean</code> | __*Optional*__
**sysctlsInput**? | <code>Map<string, string></code> | __*Optional*__
**tmpfsInput**? | <code>Map<string, string></code> | __*Optional*__
**ttyInput**? | <code>boolean</code> | __*Optional*__
**ulimitInput**? | <code>Array<[ContainerUlimit](#cdktf-provider-docker-containerulimit)></code> | __*Optional*__
**uploadInput**? | <code>Array<[ContainerUpload](#cdktf-provider-docker-containerupload)></code> | __*Optional*__
**userInput**? | <code>string</code> | __*Optional*__
**usernsModeInput**? | <code>string</code> | __*Optional*__
**volumesInput**? | <code>Array<[ContainerVolumes](#cdktf-provider-docker-containervolumes)></code> | __*Optional*__
**workingDirInput**? | <code>string</code> | __*Optional*__

### Methods


#### networkData(index) <a id="cdktf-provider-docker-container-networkdata"></a>



```ts
networkData(index: string): ContainerNetworkData
```

* **index** (<code>string</code>)  *No description*

__Returns__:
* <code>[ContainerNetworkData](#cdktf-provider-docker-containernetworkdata)</code>

#### resetAttach() <a id="cdktf-provider-docker-container-resetattach"></a>



```ts
resetAttach(): void
```





#### resetCapabilities() <a id="cdktf-provider-docker-container-resetcapabilities"></a>



```ts
resetCapabilities(): void
```





#### resetCommand() <a id="cdktf-provider-docker-container-resetcommand"></a>



```ts
resetCommand(): void
```





#### resetCpuSet() <a id="cdktf-provider-docker-container-resetcpuset"></a>



```ts
resetCpuSet(): void
```





#### resetCpuShares() <a id="cdktf-provider-docker-container-resetcpushares"></a>



```ts
resetCpuShares(): void
```





#### resetDestroyGraceSeconds() <a id="cdktf-provider-docker-container-resetdestroygraceseconds"></a>



```ts
resetDestroyGraceSeconds(): void
```





#### resetDevices() <a id="cdktf-provider-docker-container-resetdevices"></a>



```ts
resetDevices(): void
```





#### resetDns() <a id="cdktf-provider-docker-container-resetdns"></a>



```ts
resetDns(): void
```





#### resetDnsOpts() <a id="cdktf-provider-docker-container-resetdnsopts"></a>



```ts
resetDnsOpts(): void
```





#### resetDnsSearch() <a id="cdktf-provider-docker-container-resetdnssearch"></a>



```ts
resetDnsSearch(): void
```





#### resetDomainname() <a id="cdktf-provider-docker-container-resetdomainname"></a>



```ts
resetDomainname(): void
```





#### resetEntrypoint() <a id="cdktf-provider-docker-container-resetentrypoint"></a>



```ts
resetEntrypoint(): void
```





#### resetEnv() <a id="cdktf-provider-docker-container-resetenv"></a>



```ts
resetEnv(): void
```





#### resetGroupAdd() <a id="cdktf-provider-docker-container-resetgroupadd"></a>



```ts
resetGroupAdd(): void
```





#### resetHealthcheck() <a id="cdktf-provider-docker-container-resethealthcheck"></a>



```ts
resetHealthcheck(): void
```





#### resetHost() <a id="cdktf-provider-docker-container-resethost"></a>



```ts
resetHost(): void
```





#### resetHostname() <a id="cdktf-provider-docker-container-resethostname"></a>



```ts
resetHostname(): void
```





#### resetInit() <a id="cdktf-provider-docker-container-resetinit"></a>



```ts
resetInit(): void
```





#### resetIpcMode() <a id="cdktf-provider-docker-container-resetipcmode"></a>



```ts
resetIpcMode(): void
```





#### resetLabels() <a id="cdktf-provider-docker-container-resetlabels"></a>



```ts
resetLabels(): void
```





#### resetLinks() <a id="cdktf-provider-docker-container-resetlinks"></a>



```ts
resetLinks(): void
```





#### resetLogDriver() <a id="cdktf-provider-docker-container-resetlogdriver"></a>



```ts
resetLogDriver(): void
```





#### resetLogOpts() <a id="cdktf-provider-docker-container-resetlogopts"></a>



```ts
resetLogOpts(): void
```





#### resetLogs() <a id="cdktf-provider-docker-container-resetlogs"></a>



```ts
resetLogs(): void
```





#### resetMaxRetryCount() <a id="cdktf-provider-docker-container-resetmaxretrycount"></a>



```ts
resetMaxRetryCount(): void
```





#### resetMemory() <a id="cdktf-provider-docker-container-resetmemory"></a>



```ts
resetMemory(): void
```





#### resetMemorySwap() <a id="cdktf-provider-docker-container-resetmemoryswap"></a>



```ts
resetMemorySwap(): void
```





#### resetMounts() <a id="cdktf-provider-docker-container-resetmounts"></a>



```ts
resetMounts(): void
```





#### resetMustRun() <a id="cdktf-provider-docker-container-resetmustrun"></a>



```ts
resetMustRun(): void
```





#### resetNetworkAlias() <a id="cdktf-provider-docker-container-resetnetworkalias"></a>



```ts
resetNetworkAlias(): void
```





#### resetNetworkMode() <a id="cdktf-provider-docker-container-resetnetworkmode"></a>



```ts
resetNetworkMode(): void
```





#### resetNetworks() <a id="cdktf-provider-docker-container-resetnetworks"></a>



```ts
resetNetworks(): void
```





#### resetNetworksAdvanced() <a id="cdktf-provider-docker-container-resetnetworksadvanced"></a>



```ts
resetNetworksAdvanced(): void
```





#### resetPidMode() <a id="cdktf-provider-docker-container-resetpidmode"></a>



```ts
resetPidMode(): void
```





#### resetPorts() <a id="cdktf-provider-docker-container-resetports"></a>



```ts
resetPorts(): void
```





#### resetPrivileged() <a id="cdktf-provider-docker-container-resetprivileged"></a>



```ts
resetPrivileged(): void
```





#### resetPublishAllPorts() <a id="cdktf-provider-docker-container-resetpublishallports"></a>



```ts
resetPublishAllPorts(): void
```





#### resetReadOnly() <a id="cdktf-provider-docker-container-resetreadonly"></a>



```ts
resetReadOnly(): void
```





#### resetRemoveVolumes() <a id="cdktf-provider-docker-container-resetremovevolumes"></a>



```ts
resetRemoveVolumes(): void
```





#### resetRestart() <a id="cdktf-provider-docker-container-resetrestart"></a>



```ts
resetRestart(): void
```





#### resetRm() <a id="cdktf-provider-docker-container-resetrm"></a>



```ts
resetRm(): void
```





#### resetSecurityOpts() <a id="cdktf-provider-docker-container-resetsecurityopts"></a>



```ts
resetSecurityOpts(): void
```





#### resetShmSize() <a id="cdktf-provider-docker-container-resetshmsize"></a>



```ts
resetShmSize(): void
```





#### resetStart() <a id="cdktf-provider-docker-container-resetstart"></a>



```ts
resetStart(): void
```





#### resetStdinOpen() <a id="cdktf-provider-docker-container-resetstdinopen"></a>



```ts
resetStdinOpen(): void
```





#### resetSysctls() <a id="cdktf-provider-docker-container-resetsysctls"></a>



```ts
resetSysctls(): void
```





#### resetTmpfs() <a id="cdktf-provider-docker-container-resettmpfs"></a>



```ts
resetTmpfs(): void
```





#### resetTty() <a id="cdktf-provider-docker-container-resettty"></a>



```ts
resetTty(): void
```





#### resetUlimit() <a id="cdktf-provider-docker-container-resetulimit"></a>



```ts
resetUlimit(): void
```





#### resetUpload() <a id="cdktf-provider-docker-container-resetupload"></a>



```ts
resetUpload(): void
```





#### resetUser() <a id="cdktf-provider-docker-container-resetuser"></a>



```ts
resetUser(): void
```





#### resetUsernsMode() <a id="cdktf-provider-docker-container-resetusernsmode"></a>



```ts
resetUsernsMode(): void
```





#### resetVolumes() <a id="cdktf-provider-docker-container-resetvolumes"></a>



```ts
resetVolumes(): void
```





#### resetWorkingDir() <a id="cdktf-provider-docker-container-resetworkingdir"></a>



```ts
resetWorkingDir(): void
```





#### protected synthesizeAttributes() <a id="cdktf-provider-docker-container-synthesizeattributes"></a>



```ts
protected synthesizeAttributes(): Map<string, any>
```


__Returns__:
* <code>Map<string, any></code>



## class ContainerNetworkData  <a id="cdktf-provider-docker-containernetworkdata"></a>



__Extends__: [ComplexComputedList](#cdktf-complexcomputedlist)

### Initializer




```ts
new ContainerNetworkData(terraformResource: ITerraformResource, terraformAttribute: string, complexComputedListIndex: string)
```

* **terraformResource** (<code>[ITerraformResource](#cdktf-iterraformresource)</code>)  *No description*
* **terraformAttribute** (<code>string</code>)  *No description*
* **complexComputedListIndex** (<code>string</code>)  *No description*



### Properties


Name | Type | Description 
-----|------|-------------
**gateway** | <code>string</code> | <span></span>
**globalIpv6Address** | <code>string</code> | <span></span>
**globalIpv6PrefixLength** | <code>number</code> | <span></span>
**ipAddress** | <code>string</code> | <span></span>
**ipPrefixLength** | <code>number</code> | <span></span>
**ipv6Gateway** | <code>string</code> | <span></span>
**networkName** | <code>string</code> | <span></span>



## class DataDockerImage  <a id="cdktf-provider-docker-datadockerimage"></a>

Represents a {@link https://www.terraform.io/docs/providers/docker/d/image.html docker_image}.

__Implements__: [IConstruct](#constructs-iconstruct), [ITerraformResource](#cdktf-iterraformresource), [ITerraformDependable](#cdktf-iterraformdependable)
__Extends__: [TerraformDataSource](#cdktf-terraformdatasource)

### Initializer


Create a new {@link https://www.terraform.io/docs/providers/docker/d/image.html docker_image} Data Source.

```ts
new DataDockerImage(scope: Construct, id: string, config: DataDockerImageConfig)
```

* **scope** (<code>[Construct](#constructs-construct)</code>)  The scope in which to define this construct.
* **id** (<code>string</code>)  The scoped construct ID.
* **config** (<code>[DataDockerImageConfig](#cdktf-provider-docker-datadockerimageconfig)</code>)  *No description*
  * **count** (<code>number</code>)  *No description* __*Optional*__
  * **dependsOn** (<code>Array<[ITerraformDependable](#cdktf-iterraformdependable)></code>)  *No description* __*Optional*__
  * **lifecycle** (<code>[TerraformResourceLifecycle](#cdktf-terraformresourcelifecycle)</code>)  *No description* __*Optional*__
  * **provider** (<code>[TerraformProvider](#cdktf-terraformprovider)</code>)  *No description* __*Optional*__
  * **name** (<code>string</code>)  The name of the Docker image, including any tags or SHA256 repo digests. 



### Properties


Name | Type | Description 
-----|------|-------------
**id** | <code>string</code> | <span></span>
**name** | <code>string</code> | <span></span>
**nameInput** | <code>string</code> | <span></span>
**repoDigest** | <code>string</code> | <span></span>

### Methods


#### protected synthesizeAttributes() <a id="cdktf-provider-docker-datadockerimage-synthesizeattributes"></a>



```ts
protected synthesizeAttributes(): Map<string, any>
```


__Returns__:
* <code>Map<string, any></code>



## class DataDockerNetwork  <a id="cdktf-provider-docker-datadockernetwork"></a>

Represents a {@link https://www.terraform.io/docs/providers/docker/d/network.html docker_network}.

__Implements__: [IConstruct](#constructs-iconstruct), [ITerraformResource](#cdktf-iterraformresource), [ITerraformDependable](#cdktf-iterraformdependable)
__Extends__: [TerraformDataSource](#cdktf-terraformdatasource)

### Initializer


Create a new {@link https://www.terraform.io/docs/providers/docker/d/network.html docker_network} Data Source.

```ts
new DataDockerNetwork(scope: Construct, id: string, config: DataDockerNetworkConfig)
```

* **scope** (<code>[Construct](#constructs-construct)</code>)  The scope in which to define this construct.
* **id** (<code>string</code>)  The scoped construct ID.
* **config** (<code>[DataDockerNetworkConfig](#cdktf-provider-docker-datadockernetworkconfig)</code>)  *No description*
  * **count** (<code>number</code>)  *No description* __*Optional*__
  * **dependsOn** (<code>Array<[ITerraformDependable](#cdktf-iterraformdependable)></code>)  *No description* __*Optional*__
  * **lifecycle** (<code>[TerraformResourceLifecycle](#cdktf-terraformresourcelifecycle)</code>)  *No description* __*Optional*__
  * **provider** (<code>[TerraformProvider](#cdktf-terraformprovider)</code>)  *No description* __*Optional*__
  * **name** (<code>string</code>)  The name of the Docker network. 



### Properties


Name | Type | Description 
-----|------|-------------
**driver** | <code>string</code> | <span></span>
**id** | <code>string</code> | <span></span>
**internal** | <code>boolean</code> | <span></span>
**name** | <code>string</code> | <span></span>
**nameInput** | <code>string</code> | <span></span>
**scope** | <code>string</code> | <span></span>

### Methods


#### ipamConfig(index) <a id="cdktf-provider-docker-datadockernetwork-ipamconfig"></a>



```ts
ipamConfig(index: string): DataDockerNetworkIpamConfig
```

* **index** (<code>string</code>)  *No description*

__Returns__:
* <code>[DataDockerNetworkIpamConfig](#cdktf-provider-docker-datadockernetworkipamconfig)</code>

#### options(key) <a id="cdktf-provider-docker-datadockernetwork-options"></a>



```ts
options(key: string): string
```

* **key** (<code>string</code>)  *No description*

__Returns__:
* <code>string</code>

#### protected synthesizeAttributes() <a id="cdktf-provider-docker-datadockernetwork-synthesizeattributes"></a>



```ts
protected synthesizeAttributes(): Map<string, any>
```


__Returns__:
* <code>Map<string, any></code>



## class DataDockerNetworkIpamConfig  <a id="cdktf-provider-docker-datadockernetworkipamconfig"></a>



__Extends__: [ComplexComputedList](#cdktf-complexcomputedlist)

### Initializer




```ts
new DataDockerNetworkIpamConfig(terraformResource: ITerraformResource, terraformAttribute: string, complexComputedListIndex: string)
```

* **terraformResource** (<code>[ITerraformResource](#cdktf-iterraformresource)</code>)  *No description*
* **terraformAttribute** (<code>string</code>)  *No description*
* **complexComputedListIndex** (<code>string</code>)  *No description*



### Properties


Name | Type | Description 
-----|------|-------------
**auxAddress** | <code>any</code> | <span></span>
**gateway** | <code>string</code> | <span></span>
**ipRange** | <code>string</code> | <span></span>
**subnet** | <code>string</code> | <span></span>



## class DataDockerPlugin  <a id="cdktf-provider-docker-datadockerplugin"></a>

Represents a {@link https://www.terraform.io/docs/providers/docker/d/plugin.html docker_plugin}.

__Implements__: [IConstruct](#constructs-iconstruct), [ITerraformResource](#cdktf-iterraformresource), [ITerraformDependable](#cdktf-iterraformdependable)
__Extends__: [TerraformDataSource](#cdktf-terraformdatasource)

### Initializer


Create a new {@link https://www.terraform.io/docs/providers/docker/d/plugin.html docker_plugin} Data Source.

```ts
new DataDockerPlugin(scope: Construct, id: string, config?: DataDockerPluginConfig)
```

* **scope** (<code>[Construct](#constructs-construct)</code>)  The scope in which to define this construct.
* **id** (<code>string</code>)  The scoped construct ID.
* **config** (<code>[DataDockerPluginConfig](#cdktf-provider-docker-datadockerpluginconfig)</code>)  *No description*
  * **count** (<code>number</code>)  *No description* __*Optional*__
  * **dependsOn** (<code>Array<[ITerraformDependable](#cdktf-iterraformdependable)></code>)  *No description* __*Optional*__
  * **lifecycle** (<code>[TerraformResourceLifecycle](#cdktf-terraformresourcelifecycle)</code>)  *No description* __*Optional*__
  * **provider** (<code>[TerraformProvider](#cdktf-terraformprovider)</code>)  *No description* __*Optional*__
  * **alias** (<code>string</code>)  The alias of the Docker plugin. If the tag is omitted, `:latest` is complemented to the attribute value. __*Optional*__
  * **id** (<code>string</code>)  The ID of the plugin, which has precedence over the `alias` of both are given. __*Optional*__



### Properties


Name | Type | Description 
-----|------|-------------
**alias** | <code>string</code> | <span></span>
**enabled** | <code>boolean</code> | <span></span>
**env** | <code>Array<string></code> | <span></span>
**grantAllPermissions** | <code>boolean</code> | <span></span>
**id** | <code>string</code> | <span></span>
**name** | <code>string</code> | <span></span>
**pluginReference** | <code>string</code> | <span></span>
**aliasInput**? | <code>string</code> | __*Optional*__
**idInput**? | <code>string</code> | __*Optional*__

### Methods


#### resetAlias() <a id="cdktf-provider-docker-datadockerplugin-resetalias"></a>



```ts
resetAlias(): void
```





#### resetId() <a id="cdktf-provider-docker-datadockerplugin-resetid"></a>



```ts
resetId(): void
```





#### protected synthesizeAttributes() <a id="cdktf-provider-docker-datadockerplugin-synthesizeattributes"></a>



```ts
protected synthesizeAttributes(): Map<string, any>
```


__Returns__:
* <code>Map<string, any></code>



## class DataDockerRegistryImage  <a id="cdktf-provider-docker-datadockerregistryimage"></a>

Represents a {@link https://www.terraform.io/docs/providers/docker/d/registry_image.html docker_registry_image}.

__Implements__: [IConstruct](#constructs-iconstruct), [ITerraformResource](#cdktf-iterraformresource), [ITerraformDependable](#cdktf-iterraformdependable)
__Extends__: [TerraformDataSource](#cdktf-terraformdatasource)

### Initializer


Create a new {@link https://www.terraform.io/docs/providers/docker/d/registry_image.html docker_registry_image} Data Source.

```ts
new DataDockerRegistryImage(scope: Construct, id: string, config: DataDockerRegistryImageConfig)
```

* **scope** (<code>[Construct](#constructs-construct)</code>)  The scope in which to define this construct.
* **id** (<code>string</code>)  The scoped construct ID.
* **config** (<code>[DataDockerRegistryImageConfig](#cdktf-provider-docker-datadockerregistryimageconfig)</code>)  *No description*
  * **count** (<code>number</code>)  *No description* __*Optional*__
  * **dependsOn** (<code>Array<[ITerraformDependable](#cdktf-iterraformdependable)></code>)  *No description* __*Optional*__
  * **lifecycle** (<code>[TerraformResourceLifecycle](#cdktf-terraformresourcelifecycle)</code>)  *No description* __*Optional*__
  * **provider** (<code>[TerraformProvider](#cdktf-terraformprovider)</code>)  *No description* __*Optional*__
  * **name** (<code>string</code>)  The name of the Docker image, including any tags. e.g. `alpine:latest`. 
  * **insecureSkipVerify** (<code>boolean</code>)  If `true`, the verification of TLS certificates of the server/registry is disabled. Defaults to `false`. __*Optional*__



### Properties


Name | Type | Description 
-----|------|-------------
**id** | <code>string</code> | <span></span>
**insecureSkipVerify** | <code>boolean</code> | <span></span>
**name** | <code>string</code> | <span></span>
**nameInput** | <code>string</code> | <span></span>
**sha256Digest** | <code>string</code> | <span></span>
**insecureSkipVerifyInput**? | <code>boolean</code> | __*Optional*__

### Methods


#### resetInsecureSkipVerify() <a id="cdktf-provider-docker-datadockerregistryimage-resetinsecureskipverify"></a>



```ts
resetInsecureSkipVerify(): void
```





#### protected synthesizeAttributes() <a id="cdktf-provider-docker-datadockerregistryimage-synthesizeattributes"></a>



```ts
protected synthesizeAttributes(): Map<string, any>
```


__Returns__:
* <code>Map<string, any></code>



## class DockerProvider  <a id="cdktf-provider-docker-dockerprovider"></a>

Represents a {@link https://www.terraform.io/docs/providers/docker docker}.

__Implements__: [IConstruct](#constructs-iconstruct)
__Extends__: [TerraformProvider](#cdktf-terraformprovider)

### Initializer


Create a new {@link https://www.terraform.io/docs/providers/docker docker} Resource.

```ts
new DockerProvider(scope: Construct, id: string, config?: DockerProviderConfig)
```

* **scope** (<code>[Construct](#constructs-construct)</code>)  The scope in which to define this construct.
* **id** (<code>string</code>)  The scoped construct ID.
* **config** (<code>[DockerProviderConfig](#cdktf-provider-docker-dockerproviderconfig)</code>)  *No description*
  * **alias** (<code>string</code>)  Alias name. __*Optional*__
  * **caMaterial** (<code>string</code>)  PEM-encoded content of Docker host CA certificate. __*Optional*__
  * **certMaterial** (<code>string</code>)  PEM-encoded content of Docker client certificate. __*Optional*__
  * **certPath** (<code>string</code>)  Path to directory with Docker TLS config. __*Optional*__
  * **host** (<code>string</code>)  The Docker daemon address. __*Optional*__
  * **keyMaterial** (<code>string</code>)  PEM-encoded content of Docker client private key. __*Optional*__
  * **registryAuth** (<code>Array<[DockerProviderRegistryAuth](#cdktf-provider-docker-dockerproviderregistryauth)></code>)  registry_auth block. __*Optional*__



### Properties


Name | Type | Description 
-----|------|-------------
**alias**? | <code>string</code> | __*Optional*__
**aliasInput**? | <code>string</code> | __*Optional*__
**caMaterial**? | <code>string</code> | __*Optional*__
**caMaterialInput**? | <code>string</code> | __*Optional*__
**certMaterial**? | <code>string</code> | __*Optional*__
**certMaterialInput**? | <code>string</code> | __*Optional*__
**certPath**? | <code>string</code> | __*Optional*__
**certPathInput**? | <code>string</code> | __*Optional*__
**host**? | <code>string</code> | __*Optional*__
**hostInput**? | <code>string</code> | __*Optional*__
**keyMaterial**? | <code>string</code> | __*Optional*__
**keyMaterialInput**? | <code>string</code> | __*Optional*__
**registryAuth**? | <code>Array<[DockerProviderRegistryAuth](#cdktf-provider-docker-dockerproviderregistryauth)></code> | __*Optional*__
**registryAuthInput**? | <code>Array<[DockerProviderRegistryAuth](#cdktf-provider-docker-dockerproviderregistryauth)></code> | __*Optional*__

### Methods


#### resetAlias() <a id="cdktf-provider-docker-dockerprovider-resetalias"></a>



```ts
resetAlias(): void
```





#### resetCaMaterial() <a id="cdktf-provider-docker-dockerprovider-resetcamaterial"></a>



```ts
resetCaMaterial(): void
```





#### resetCertMaterial() <a id="cdktf-provider-docker-dockerprovider-resetcertmaterial"></a>



```ts
resetCertMaterial(): void
```





#### resetCertPath() <a id="cdktf-provider-docker-dockerprovider-resetcertpath"></a>



```ts
resetCertPath(): void
```





#### resetHost() <a id="cdktf-provider-docker-dockerprovider-resethost"></a>



```ts
resetHost(): void
```





#### resetKeyMaterial() <a id="cdktf-provider-docker-dockerprovider-resetkeymaterial"></a>



```ts
resetKeyMaterial(): void
```





#### resetRegistryAuth() <a id="cdktf-provider-docker-dockerprovider-resetregistryauth"></a>



```ts
resetRegistryAuth(): void
```





#### protected synthesizeAttributes() <a id="cdktf-provider-docker-dockerprovider-synthesizeattributes"></a>



```ts
protected synthesizeAttributes(): Map<string, any>
```


__Returns__:
* <code>Map<string, any></code>



## class Image  <a id="cdktf-provider-docker-image"></a>

Represents a {@link https://www.terraform.io/docs/providers/docker/r/image.html docker_image}.

__Implements__: [IConstruct](#constructs-iconstruct), [ITerraformResource](#cdktf-iterraformresource), [ITerraformDependable](#cdktf-iterraformdependable)
__Extends__: [TerraformResource](#cdktf-terraformresource)

### Initializer


Create a new {@link https://www.terraform.io/docs/providers/docker/r/image.html docker_image} Resource.

```ts
new Image(scope: Construct, id: string, config: ImageConfig)
```

* **scope** (<code>[Construct](#constructs-construct)</code>)  The scope in which to define this construct.
* **id** (<code>string</code>)  The scoped construct ID.
* **config** (<code>[ImageConfig](#cdktf-provider-docker-imageconfig)</code>)  *No description*
  * **count** (<code>number</code>)  *No description* __*Optional*__
  * **dependsOn** (<code>Array<[ITerraformDependable](#cdktf-iterraformdependable)></code>)  *No description* __*Optional*__
  * **lifecycle** (<code>[TerraformResourceLifecycle](#cdktf-terraformresourcelifecycle)</code>)  *No description* __*Optional*__
  * **provider** (<code>[TerraformProvider](#cdktf-terraformprovider)</code>)  *No description* __*Optional*__
  * **name** (<code>string</code>)  The name of the Docker image, including any tags or SHA256 repo digests. 
  * **buildAttribute** (<code>Array<[ImageBuild](#cdktf-provider-docker-imagebuild)></code>)  build block. __*Optional*__
  * **forceRemove** (<code>boolean</code>)  If true, then the image is removed forcibly when the resource is destroyed. __*Optional*__
  * **keepLocally** (<code>boolean</code>)  If true, then the Docker image won't be deleted on destroy operation. __*Optional*__
  * **pullTrigger** (<code>string</code>)  A value which cause an image pull when changed. __*Optional*__
  * **pullTriggers** (<code>Array<string></code>)  List of values which cause an image pull when changed. __*Optional*__



### Properties


Name | Type | Description 
-----|------|-------------
**buildAttribute** | <code>Array<[ImageBuild](#cdktf-provider-docker-imagebuild)></code> | <span></span>
**forceRemove** | <code>boolean</code> | <span></span>
**id** | <code>string</code> | <span></span>
**keepLocally** | <code>boolean</code> | <span></span>
**latest** | <code>string</code> | <span></span>
**name** | <code>string</code> | <span></span>
**nameInput** | <code>string</code> | <span></span>
**output** | <code>string</code> | <span></span>
**pullTrigger** | <code>string</code> | <span></span>
**pullTriggers** | <code>Array<string></code> | <span></span>
**repoDigest** | <code>string</code> | <span></span>
**buildAttributeInput**? | <code>Array<[ImageBuild](#cdktf-provider-docker-imagebuild)></code> | __*Optional*__
**forceRemoveInput**? | <code>boolean</code> | __*Optional*__
**keepLocallyInput**? | <code>boolean</code> | __*Optional*__
**pullTriggerInput**? | <code>string</code> | __*Optional*__
**pullTriggersInput**? | <code>Array<string></code> | __*Optional*__

### Methods


#### resetBuildAttribute() <a id="cdktf-provider-docker-image-resetbuildattribute"></a>



```ts
resetBuildAttribute(): void
```





#### resetForceRemove() <a id="cdktf-provider-docker-image-resetforceremove"></a>



```ts
resetForceRemove(): void
```





#### resetKeepLocally() <a id="cdktf-provider-docker-image-resetkeeplocally"></a>



```ts
resetKeepLocally(): void
```





#### resetPullTrigger() <a id="cdktf-provider-docker-image-resetpulltrigger"></a>



```ts
resetPullTrigger(): void
```





#### resetPullTriggers() <a id="cdktf-provider-docker-image-resetpulltriggers"></a>



```ts
resetPullTriggers(): void
```





#### protected synthesizeAttributes() <a id="cdktf-provider-docker-image-synthesizeattributes"></a>



```ts
protected synthesizeAttributes(): Map<string, any>
```


__Returns__:
* <code>Map<string, any></code>



## class Network  <a id="cdktf-provider-docker-network"></a>

Represents a {@link https://www.terraform.io/docs/providers/docker/r/network.html docker_network}.

__Implements__: [IConstruct](#constructs-iconstruct), [ITerraformResource](#cdktf-iterraformresource), [ITerraformDependable](#cdktf-iterraformdependable)
__Extends__: [TerraformResource](#cdktf-terraformresource)

### Initializer


Create a new {@link https://www.terraform.io/docs/providers/docker/r/network.html docker_network} Resource.

```ts
new Network(scope: Construct, id: string, config: NetworkConfig)
```

* **scope** (<code>[Construct](#constructs-construct)</code>)  The scope in which to define this construct.
* **id** (<code>string</code>)  The scoped construct ID.
* **config** (<code>[NetworkConfig](#cdktf-provider-docker-networkconfig)</code>)  *No description*
  * **count** (<code>number</code>)  *No description* __*Optional*__
  * **dependsOn** (<code>Array<[ITerraformDependable](#cdktf-iterraformdependable)></code>)  *No description* __*Optional*__
  * **lifecycle** (<code>[TerraformResourceLifecycle](#cdktf-terraformresourcelifecycle)</code>)  *No description* __*Optional*__
  * **provider** (<code>[TerraformProvider](#cdktf-terraformprovider)</code>)  *No description* __*Optional*__
  * **name** (<code>string</code>)  The name of the Docker network. 
  * **attachable** (<code>boolean</code>)  Enable manual container attachment to the network. __*Optional*__
  * **checkDuplicate** (<code>boolean</code>)  Requests daemon to check for networks with same name. __*Optional*__
  * **driver** (<code>string</code>)  The driver of the Docker network. Possible values are `bridge`, `host`, `overlay`, `macvlan`. See [network docs](https://docs.docker.com/network/#network-drivers) for more details. __*Optional*__
  * **ingress** (<code>boolean</code>)  Create swarm routing-mesh network. Defaults to `false`. __*Optional*__
  * **internal** (<code>boolean</code>)  Whether the network is internal. __*Optional*__
  * **ipamConfig** (<code>Array<[NetworkIpamConfig](#cdktf-provider-docker-networkipamconfig)></code>)  ipam_config block. __*Optional*__
  * **ipamDriver** (<code>string</code>)  Driver used by the custom IP scheme of the network. Defaults to `default`. __*Optional*__
  * **ipv6** (<code>boolean</code>)  Enable IPv6 networking. Defaults to `false`. __*Optional*__
  * **labels** (<code>Array<[NetworkLabels](#cdktf-provider-docker-networklabels)></code>)  labels block. __*Optional*__
  * **options** (<code>Map<string, string></code>)  Only available with bridge networks. See [bridge options docs](https://docs.docker.com/engine/reference/commandline/network_create/#bridge-driver-options) for more details. __*Optional*__



### Properties


Name | Type | Description 
-----|------|-------------
**attachable** | <code>boolean</code> | <span></span>
**checkDuplicate** | <code>boolean</code> | <span></span>
**driver** | <code>string</code> | <span></span>
**id** | <code>string</code> | <span></span>
**ingress** | <code>boolean</code> | <span></span>
**internal** | <code>boolean</code> | <span></span>
**ipamConfig** | <code>Array<[NetworkIpamConfig](#cdktf-provider-docker-networkipamconfig)></code> | <span></span>
**ipamDriver** | <code>string</code> | <span></span>
**ipv6** | <code>boolean</code> | <span></span>
**labels** | <code>Array<[NetworkLabels](#cdktf-provider-docker-networklabels)></code> | <span></span>
**name** | <code>string</code> | <span></span>
**nameInput** | <code>string</code> | <span></span>
**options** | <code>Map<string, string></code> | <span></span>
**scope** | <code>string</code> | <span></span>
**attachableInput**? | <code>boolean</code> | __*Optional*__
**checkDuplicateInput**? | <code>boolean</code> | __*Optional*__
**driverInput**? | <code>string</code> | __*Optional*__
**ingressInput**? | <code>boolean</code> | __*Optional*__
**internalInput**? | <code>boolean</code> | __*Optional*__
**ipamConfigInput**? | <code>Array<[NetworkIpamConfig](#cdktf-provider-docker-networkipamconfig)></code> | __*Optional*__
**ipamDriverInput**? | <code>string</code> | __*Optional*__
**ipv6Input**? | <code>boolean</code> | __*Optional*__
**labelsInput**? | <code>Array<[NetworkLabels](#cdktf-provider-docker-networklabels)></code> | __*Optional*__
**optionsInput**? | <code>Map<string, string></code> | __*Optional*__

### Methods


#### resetAttachable() <a id="cdktf-provider-docker-network-resetattachable"></a>



```ts
resetAttachable(): void
```





#### resetCheckDuplicate() <a id="cdktf-provider-docker-network-resetcheckduplicate"></a>



```ts
resetCheckDuplicate(): void
```





#### resetDriver() <a id="cdktf-provider-docker-network-resetdriver"></a>



```ts
resetDriver(): void
```





#### resetIngress() <a id="cdktf-provider-docker-network-resetingress"></a>



```ts
resetIngress(): void
```





#### resetInternal() <a id="cdktf-provider-docker-network-resetinternal"></a>



```ts
resetInternal(): void
```





#### resetIpamConfig() <a id="cdktf-provider-docker-network-resetipamconfig"></a>



```ts
resetIpamConfig(): void
```





#### resetIpamDriver() <a id="cdktf-provider-docker-network-resetipamdriver"></a>



```ts
resetIpamDriver(): void
```





#### resetIpv6() <a id="cdktf-provider-docker-network-resetipv6"></a>



```ts
resetIpv6(): void
```





#### resetLabels() <a id="cdktf-provider-docker-network-resetlabels"></a>



```ts
resetLabels(): void
```





#### resetOptions() <a id="cdktf-provider-docker-network-resetoptions"></a>



```ts
resetOptions(): void
```





#### protected synthesizeAttributes() <a id="cdktf-provider-docker-network-synthesizeattributes"></a>



```ts
protected synthesizeAttributes(): Map<string, any>
```


__Returns__:
* <code>Map<string, any></code>



## class Plugin  <a id="cdktf-provider-docker-plugin"></a>

Represents a {@link https://www.terraform.io/docs/providers/docker/r/plugin.html docker_plugin}.

__Implements__: [IConstruct](#constructs-iconstruct), [ITerraformResource](#cdktf-iterraformresource), [ITerraformDependable](#cdktf-iterraformdependable)
__Extends__: [TerraformResource](#cdktf-terraformresource)

### Initializer


Create a new {@link https://www.terraform.io/docs/providers/docker/r/plugin.html docker_plugin} Resource.

```ts
new Plugin(scope: Construct, id: string, config: PluginConfig)
```

* **scope** (<code>[Construct](#constructs-construct)</code>)  The scope in which to define this construct.
* **id** (<code>string</code>)  The scoped construct ID.
* **config** (<code>[PluginConfig](#cdktf-provider-docker-pluginconfig)</code>)  *No description*
  * **count** (<code>number</code>)  *No description* __*Optional*__
  * **dependsOn** (<code>Array<[ITerraformDependable](#cdktf-iterraformdependable)></code>)  *No description* __*Optional*__
  * **lifecycle** (<code>[TerraformResourceLifecycle](#cdktf-terraformresourcelifecycle)</code>)  *No description* __*Optional*__
  * **provider** (<code>[TerraformProvider](#cdktf-terraformprovider)</code>)  *No description* __*Optional*__
  * **name** (<code>string</code>)  Docker Plugin name. 
  * **alias** (<code>string</code>)  Docker Plugin alias. __*Optional*__
  * **enabled** (<code>boolean</code>)  If `true` the plugin is enabled. Defaults to `true`. __*Optional*__
  * **enableTimeout** (<code>number</code>)  HTTP client timeout to enable the plugin. __*Optional*__
  * **env** (<code>Array<string></code>)  The environment variables in the form of `KEY=VALUE`, e.g. `DEBUG=0`. __*Optional*__
  * **forceDestroy** (<code>boolean</code>)  If true, then the plugin is destroyed forcibly. __*Optional*__
  * **forceDisable** (<code>boolean</code>)  If true, then the plugin is disabled forcibly. __*Optional*__
  * **grantAllPermissions** (<code>boolean</code>)  If true, grant all permissions necessary to run the plugin. __*Optional*__
  * **grantPermissions** (<code>Array<[PluginGrantPermissions](#cdktf-provider-docker-plugingrantpermissions)></code>)  grant_permissions block. __*Optional*__



### Properties


Name | Type | Description 
-----|------|-------------
**alias** | <code>string</code> | <span></span>
**enableTimeout** | <code>number</code> | <span></span>
**enabled** | <code>boolean</code> | <span></span>
**env** | <code>Array<string></code> | <span></span>
**forceDestroy** | <code>boolean</code> | <span></span>
**forceDisable** | <code>boolean</code> | <span></span>
**grantAllPermissions** | <code>boolean</code> | <span></span>
**grantPermissions** | <code>Array<[PluginGrantPermissions](#cdktf-provider-docker-plugingrantpermissions)></code> | <span></span>
**id** | <code>string</code> | <span></span>
**name** | <code>string</code> | <span></span>
**nameInput** | <code>string</code> | <span></span>
**pluginReference** | <code>string</code> | <span></span>
**aliasInput**? | <code>string</code> | __*Optional*__
**enableTimeoutInput**? | <code>number</code> | __*Optional*__
**enabledInput**? | <code>boolean</code> | __*Optional*__
**envInput**? | <code>Array<string></code> | __*Optional*__
**forceDestroyInput**? | <code>boolean</code> | __*Optional*__
**forceDisableInput**? | <code>boolean</code> | __*Optional*__
**grantAllPermissionsInput**? | <code>boolean</code> | __*Optional*__
**grantPermissionsInput**? | <code>Array<[PluginGrantPermissions](#cdktf-provider-docker-plugingrantpermissions)></code> | __*Optional*__

### Methods


#### resetAlias() <a id="cdktf-provider-docker-plugin-resetalias"></a>



```ts
resetAlias(): void
```





#### resetEnableTimeout() <a id="cdktf-provider-docker-plugin-resetenabletimeout"></a>



```ts
resetEnableTimeout(): void
```





#### resetEnabled() <a id="cdktf-provider-docker-plugin-resetenabled"></a>



```ts
resetEnabled(): void
```





#### resetEnv() <a id="cdktf-provider-docker-plugin-resetenv"></a>



```ts
resetEnv(): void
```





#### resetForceDestroy() <a id="cdktf-provider-docker-plugin-resetforcedestroy"></a>



```ts
resetForceDestroy(): void
```





#### resetForceDisable() <a id="cdktf-provider-docker-plugin-resetforcedisable"></a>



```ts
resetForceDisable(): void
```





#### resetGrantAllPermissions() <a id="cdktf-provider-docker-plugin-resetgrantallpermissions"></a>



```ts
resetGrantAllPermissions(): void
```





#### resetGrantPermissions() <a id="cdktf-provider-docker-plugin-resetgrantpermissions"></a>



```ts
resetGrantPermissions(): void
```





#### protected synthesizeAttributes() <a id="cdktf-provider-docker-plugin-synthesizeattributes"></a>



```ts
protected synthesizeAttributes(): Map<string, any>
```


__Returns__:
* <code>Map<string, any></code>



## class RegistryImage  <a id="cdktf-provider-docker-registryimage"></a>

Represents a {@link https://www.terraform.io/docs/providers/docker/r/registry_image.html docker_registry_image}.

__Implements__: [IConstruct](#constructs-iconstruct), [ITerraformResource](#cdktf-iterraformresource), [ITerraformDependable](#cdktf-iterraformdependable)
__Extends__: [TerraformResource](#cdktf-terraformresource)

### Initializer


Create a new {@link https://www.terraform.io/docs/providers/docker/r/registry_image.html docker_registry_image} Resource.

```ts
new RegistryImage(scope: Construct, id: string, config: RegistryImageConfig)
```

* **scope** (<code>[Construct](#constructs-construct)</code>)  The scope in which to define this construct.
* **id** (<code>string</code>)  The scoped construct ID.
* **config** (<code>[RegistryImageConfig](#cdktf-provider-docker-registryimageconfig)</code>)  *No description*
  * **count** (<code>number</code>)  *No description* __*Optional*__
  * **dependsOn** (<code>Array<[ITerraformDependable](#cdktf-iterraformdependable)></code>)  *No description* __*Optional*__
  * **lifecycle** (<code>[TerraformResourceLifecycle](#cdktf-terraformresourcelifecycle)</code>)  *No description* __*Optional*__
  * **provider** (<code>[TerraformProvider](#cdktf-terraformprovider)</code>)  *No description* __*Optional*__
  * **name** (<code>string</code>)  The name of the Docker image. 
  * **buildAttribute** (<code>Array<[RegistryImageBuild](#cdktf-provider-docker-registryimagebuild)></code>)  build block. __*Optional*__
  * **insecureSkipVerify** (<code>boolean</code>)  If `true`, the verification of TLS certificates of the server/registry is disabled. Defaults to `false`. __*Optional*__
  * **keepRemotely** (<code>boolean</code>)  If true, then the Docker image won't be deleted on destroy operation. __*Optional*__



### Properties


Name | Type | Description 
-----|------|-------------
**buildAttribute** | <code>Array<[RegistryImageBuild](#cdktf-provider-docker-registryimagebuild)></code> | <span></span>
**id** | <code>string</code> | <span></span>
**insecureSkipVerify** | <code>boolean</code> | <span></span>
**keepRemotely** | <code>boolean</code> | <span></span>
**name** | <code>string</code> | <span></span>
**nameInput** | <code>string</code> | <span></span>
**sha256Digest** | <code>string</code> | <span></span>
**buildAttributeInput**? | <code>Array<[RegistryImageBuild](#cdktf-provider-docker-registryimagebuild)></code> | __*Optional*__
**insecureSkipVerifyInput**? | <code>boolean</code> | __*Optional*__
**keepRemotelyInput**? | <code>boolean</code> | __*Optional*__

### Methods


#### resetBuildAttribute() <a id="cdktf-provider-docker-registryimage-resetbuildattribute"></a>



```ts
resetBuildAttribute(): void
```





#### resetInsecureSkipVerify() <a id="cdktf-provider-docker-registryimage-resetinsecureskipverify"></a>



```ts
resetInsecureSkipVerify(): void
```





#### resetKeepRemotely() <a id="cdktf-provider-docker-registryimage-resetkeepremotely"></a>



```ts
resetKeepRemotely(): void
```





#### protected synthesizeAttributes() <a id="cdktf-provider-docker-registryimage-synthesizeattributes"></a>



```ts
protected synthesizeAttributes(): Map<string, any>
```


__Returns__:
* <code>Map<string, any></code>



## class Secret  <a id="cdktf-provider-docker-secret"></a>

Represents a {@link https://www.terraform.io/docs/providers/docker/r/secret.html docker_secret}.

__Implements__: [IConstruct](#constructs-iconstruct), [ITerraformResource](#cdktf-iterraformresource), [ITerraformDependable](#cdktf-iterraformdependable)
__Extends__: [TerraformResource](#cdktf-terraformresource)

### Initializer


Create a new {@link https://www.terraform.io/docs/providers/docker/r/secret.html docker_secret} Resource.

```ts
new Secret(scope: Construct, id: string, config: SecretConfig)
```

* **scope** (<code>[Construct](#constructs-construct)</code>)  The scope in which to define this construct.
* **id** (<code>string</code>)  The scoped construct ID.
* **config** (<code>[SecretConfig](#cdktf-provider-docker-secretconfig)</code>)  *No description*
  * **count** (<code>number</code>)  *No description* __*Optional*__
  * **dependsOn** (<code>Array<[ITerraformDependable](#cdktf-iterraformdependable)></code>)  *No description* __*Optional*__
  * **lifecycle** (<code>[TerraformResourceLifecycle](#cdktf-terraformresourcelifecycle)</code>)  *No description* __*Optional*__
  * **provider** (<code>[TerraformProvider](#cdktf-terraformprovider)</code>)  *No description* __*Optional*__
  * **data** (<code>string</code>)  Base64-url-safe-encoded secret data. 
  * **name** (<code>string</code>)  User-defined name of the secret. 
  * **labels** (<code>Array<[SecretLabels](#cdktf-provider-docker-secretlabels)></code>)  labels block. __*Optional*__



### Properties


Name | Type | Description 
-----|------|-------------
**data** | <code>string</code> | <span></span>
**dataInput** | <code>string</code> | <span></span>
**id** | <code>string</code> | <span></span>
**labels** | <code>Array<[SecretLabels](#cdktf-provider-docker-secretlabels)></code> | <span></span>
**name** | <code>string</code> | <span></span>
**nameInput** | <code>string</code> | <span></span>
**labelsInput**? | <code>Array<[SecretLabels](#cdktf-provider-docker-secretlabels)></code> | __*Optional*__

### Methods


#### resetLabels() <a id="cdktf-provider-docker-secret-resetlabels"></a>



```ts
resetLabels(): void
```





#### protected synthesizeAttributes() <a id="cdktf-provider-docker-secret-synthesizeattributes"></a>



```ts
protected synthesizeAttributes(): Map<string, any>
```


__Returns__:
* <code>Map<string, any></code>



## class Service  <a id="cdktf-provider-docker-service"></a>

Represents a {@link https://www.terraform.io/docs/providers/docker/r/service.html docker_service}.

__Implements__: [IConstruct](#constructs-iconstruct), [ITerraformResource](#cdktf-iterraformresource), [ITerraformDependable](#cdktf-iterraformdependable)
__Extends__: [TerraformResource](#cdktf-terraformresource)

### Initializer


Create a new {@link https://www.terraform.io/docs/providers/docker/r/service.html docker_service} Resource.

```ts
new Service(scope: Construct, id: string, config: ServiceConfig)
```

* **scope** (<code>[Construct](#constructs-construct)</code>)  The scope in which to define this construct.
* **id** (<code>string</code>)  The scoped construct ID.
* **config** (<code>[ServiceConfig](#cdktf-provider-docker-serviceconfig)</code>)  *No description*
  * **count** (<code>number</code>)  *No description* __*Optional*__
  * **dependsOn** (<code>Array<[ITerraformDependable](#cdktf-iterraformdependable)></code>)  *No description* __*Optional*__
  * **lifecycle** (<code>[TerraformResourceLifecycle](#cdktf-terraformresourcelifecycle)</code>)  *No description* __*Optional*__
  * **provider** (<code>[TerraformProvider](#cdktf-terraformprovider)</code>)  *No description* __*Optional*__
  * **name** (<code>string</code>)  Name of the service. 
  * **taskSpec** (<code>Array<[ServiceTaskSpec](#cdktf-provider-docker-servicetaskspec)></code>)  task_spec block. 
  * **auth** (<code>Array<[ServiceAuth](#cdktf-provider-docker-serviceauth)></code>)  auth block. __*Optional*__
  * **convergeConfig** (<code>Array<[ServiceConvergeConfig](#cdktf-provider-docker-serviceconvergeconfig)></code>)  converge_config block. __*Optional*__
  * **endpointSpec** (<code>Array<[ServiceEndpointSpec](#cdktf-provider-docker-serviceendpointspec)></code>)  endpoint_spec block. __*Optional*__
  * **labels** (<code>Array<[ServiceLabels](#cdktf-provider-docker-servicelabels)></code>)  labels block. __*Optional*__
  * **mode** (<code>Array<[ServiceMode](#cdktf-provider-docker-servicemode)></code>)  mode block. __*Optional*__
  * **rollbackConfig** (<code>Array<[ServiceRollbackConfig](#cdktf-provider-docker-servicerollbackconfig)></code>)  rollback_config block. __*Optional*__
  * **updateConfig** (<code>Array<[ServiceUpdateConfig](#cdktf-provider-docker-serviceupdateconfig)></code>)  update_config block. __*Optional*__



### Properties


Name | Type | Description 
-----|------|-------------
**auth** | <code>Array<[ServiceAuth](#cdktf-provider-docker-serviceauth)></code> | <span></span>
**convergeConfig** | <code>Array<[ServiceConvergeConfig](#cdktf-provider-docker-serviceconvergeconfig)></code> | <span></span>
**endpointSpec** | <code>Array<[ServiceEndpointSpec](#cdktf-provider-docker-serviceendpointspec)></code> | <span></span>
**id** | <code>string</code> | <span></span>
**labels** | <code>Array<[ServiceLabels](#cdktf-provider-docker-servicelabels)></code> | <span></span>
**mode** | <code>Array<[ServiceMode](#cdktf-provider-docker-servicemode)></code> | <span></span>
**name** | <code>string</code> | <span></span>
**nameInput** | <code>string</code> | <span></span>
**rollbackConfig** | <code>Array<[ServiceRollbackConfig](#cdktf-provider-docker-servicerollbackconfig)></code> | <span></span>
**taskSpec** | <code>Array<[ServiceTaskSpec](#cdktf-provider-docker-servicetaskspec)></code> | <span></span>
**taskSpecInput** | <code>Array<[ServiceTaskSpec](#cdktf-provider-docker-servicetaskspec)></code> | <span></span>
**updateConfig** | <code>Array<[ServiceUpdateConfig](#cdktf-provider-docker-serviceupdateconfig)></code> | <span></span>
**authInput**? | <code>Array<[ServiceAuth](#cdktf-provider-docker-serviceauth)></code> | __*Optional*__
**convergeConfigInput**? | <code>Array<[ServiceConvergeConfig](#cdktf-provider-docker-serviceconvergeconfig)></code> | __*Optional*__
**endpointSpecInput**? | <code>Array<[ServiceEndpointSpec](#cdktf-provider-docker-serviceendpointspec)></code> | __*Optional*__
**labelsInput**? | <code>Array<[ServiceLabels](#cdktf-provider-docker-servicelabels)></code> | __*Optional*__
**modeInput**? | <code>Array<[ServiceMode](#cdktf-provider-docker-servicemode)></code> | __*Optional*__
**rollbackConfigInput**? | <code>Array<[ServiceRollbackConfig](#cdktf-provider-docker-servicerollbackconfig)></code> | __*Optional*__
**updateConfigInput**? | <code>Array<[ServiceUpdateConfig](#cdktf-provider-docker-serviceupdateconfig)></code> | __*Optional*__

### Methods


#### resetAuth() <a id="cdktf-provider-docker-service-resetauth"></a>



```ts
resetAuth(): void
```





#### resetConvergeConfig() <a id="cdktf-provider-docker-service-resetconvergeconfig"></a>



```ts
resetConvergeConfig(): void
```





#### resetEndpointSpec() <a id="cdktf-provider-docker-service-resetendpointspec"></a>



```ts
resetEndpointSpec(): void
```





#### resetLabels() <a id="cdktf-provider-docker-service-resetlabels"></a>



```ts
resetLabels(): void
```





#### resetMode() <a id="cdktf-provider-docker-service-resetmode"></a>



```ts
resetMode(): void
```





#### resetRollbackConfig() <a id="cdktf-provider-docker-service-resetrollbackconfig"></a>



```ts
resetRollbackConfig(): void
```





#### resetUpdateConfig() <a id="cdktf-provider-docker-service-resetupdateconfig"></a>



```ts
resetUpdateConfig(): void
```





#### protected synthesizeAttributes() <a id="cdktf-provider-docker-service-synthesizeattributes"></a>



```ts
protected synthesizeAttributes(): Map<string, any>
```


__Returns__:
* <code>Map<string, any></code>



## class Volume  <a id="cdktf-provider-docker-volume"></a>

Represents a {@link https://www.terraform.io/docs/providers/docker/r/volume.html docker_volume}.

__Implements__: [IConstruct](#constructs-iconstruct), [ITerraformResource](#cdktf-iterraformresource), [ITerraformDependable](#cdktf-iterraformdependable)
__Extends__: [TerraformResource](#cdktf-terraformresource)

### Initializer


Create a new {@link https://www.terraform.io/docs/providers/docker/r/volume.html docker_volume} Resource.

```ts
new Volume(scope: Construct, id: string, config?: VolumeConfig)
```

* **scope** (<code>[Construct](#constructs-construct)</code>)  The scope in which to define this construct.
* **id** (<code>string</code>)  The scoped construct ID.
* **config** (<code>[VolumeConfig](#cdktf-provider-docker-volumeconfig)</code>)  *No description*
  * **count** (<code>number</code>)  *No description* __*Optional*__
  * **dependsOn** (<code>Array<[ITerraformDependable](#cdktf-iterraformdependable)></code>)  *No description* __*Optional*__
  * **lifecycle** (<code>[TerraformResourceLifecycle](#cdktf-terraformresourcelifecycle)</code>)  *No description* __*Optional*__
  * **provider** (<code>[TerraformProvider](#cdktf-terraformprovider)</code>)  *No description* __*Optional*__
  * **driver** (<code>string</code>)  Driver type for the volume. Defaults to `local`. __*Optional*__
  * **driverOpts** (<code>Map<string, string></code>)  Options specific to the driver. __*Optional*__
  * **labels** (<code>Array<[VolumeLabels](#cdktf-provider-docker-volumelabels)></code>)  labels block. __*Optional*__
  * **name** (<code>string</code>)  The name of the Docker volume (will be generated if not provided). __*Optional*__



### Properties


Name | Type | Description 
-----|------|-------------
**driver** | <code>string</code> | <span></span>
**driverOpts** | <code>Map<string, string></code> | <span></span>
**id** | <code>string</code> | <span></span>
**labels** | <code>Array<[VolumeLabels](#cdktf-provider-docker-volumelabels)></code> | <span></span>
**mountpoint** | <code>string</code> | <span></span>
**name** | <code>string</code> | <span></span>
**driverInput**? | <code>string</code> | __*Optional*__
**driverOptsInput**? | <code>Map<string, string></code> | __*Optional*__
**labelsInput**? | <code>Array<[VolumeLabels](#cdktf-provider-docker-volumelabels)></code> | __*Optional*__
**nameInput**? | <code>string</code> | __*Optional*__

### Methods


#### resetDriver() <a id="cdktf-provider-docker-volume-resetdriver"></a>



```ts
resetDriver(): void
```





#### resetDriverOpts() <a id="cdktf-provider-docker-volume-resetdriveropts"></a>



```ts
resetDriverOpts(): void
```





#### resetLabels() <a id="cdktf-provider-docker-volume-resetlabels"></a>



```ts
resetLabels(): void
```





#### resetName() <a id="cdktf-provider-docker-volume-resetname"></a>



```ts
resetName(): void
```





#### protected synthesizeAttributes() <a id="cdktf-provider-docker-volume-synthesizeattributes"></a>



```ts
protected synthesizeAttributes(): Map<string, any>
```


__Returns__:
* <code>Map<string, any></code>



## struct ConfigConfig  <a id="cdktf-provider-docker-configconfig"></a>






Name | Type | Description 
-----|------|-------------
**data** | <code>string</code> | Base64-url-safe-encoded config data.
**name** | <code>string</code> | User-defined name of the config.
**count**?🔹 | <code>number</code> | __*Optional*__
**dependsOn**?🔹 | <code>Array<[ITerraformDependable](#cdktf-iterraformdependable)></code> | __*Optional*__
**lifecycle**?🔹 | <code>[TerraformResourceLifecycle](#cdktf-terraformresourcelifecycle)</code> | __*Optional*__
**provider**?🔹 | <code>[TerraformProvider](#cdktf-terraformprovider)</code> | __*Optional*__



## struct ContainerCapabilities  <a id="cdktf-provider-docker-containercapabilities"></a>






Name | Type | Description 
-----|------|-------------
**add**? | <code>Array<string></code> | List of linux capabilities to add.<br/>__*Optional*__
**drop**? | <code>Array<string></code> | List of linux capabilities to drop.<br/>__*Optional*__



## struct ContainerConfig  <a id="cdktf-provider-docker-containerconfig"></a>






Name | Type | Description 
-----|------|-------------
**image** | <code>string</code> | The ID of the image to back this container.
**name** | <code>string</code> | The name of the container.
**attach**? | <code>boolean</code> | If `true` attach to the container after its creation and waits the end of its execution. Defaults to `false`.<br/>__*Optional*__
**capabilities**? | <code>Array<[ContainerCapabilities](#cdktf-provider-docker-containercapabilities)></code> | capabilities block.<br/>__*Optional*__
**command**? | <code>Array<string></code> | The command to use to start the container.<br/>__*Optional*__
**count**?🔹 | <code>number</code> | __*Optional*__
**cpuSet**? | <code>string</code> | A comma-separated list or hyphen-separated range of CPUs a container can use, e.g. `0-1`.<br/>__*Optional*__
**cpuShares**? | <code>number</code> | CPU shares (relative weight) for the container.<br/>__*Optional*__
**dependsOn**?🔹 | <code>Array<[ITerraformDependable](#cdktf-iterraformdependable)></code> | __*Optional*__
**destroyGraceSeconds**? | <code>number</code> | If defined will attempt to stop the container before destroying.<br/>__*Optional*__
**devices**? | <code>Array<[ContainerDevices](#cdktf-provider-docker-containerdevices)></code> | devices block.<br/>__*Optional*__
**dns**? | <code>Array<string></code> | DNS servers to use.<br/>__*Optional*__
**dnsOpts**? | <code>Array<string></code> | DNS options used by the DNS provider(s), see `resolv.conf` documentation for valid list of options.<br/>__*Optional*__
**dnsSearch**? | <code>Array<string></code> | DNS search domains that are used when bare unqualified hostnames are used inside of the container.<br/>__*Optional*__
**domainname**? | <code>string</code> | Domain name of the container.<br/>__*Optional*__
**entrypoint**? | <code>Array<string></code> | The command to use as the Entrypoint for the container.<br/>__*Optional*__
**env**? | <code>Array<string></code> | Environment variables to set in the form of `KEY=VALUE`, e.g. `DEBUG=0`.<br/>__*Optional*__
**groupAdd**? | <code>Array<string></code> | Additional groups for the container user.<br/>__*Optional*__
**healthcheck**? | <code>Array<[ContainerHealthcheck](#cdktf-provider-docker-containerhealthcheck)></code> | healthcheck block.<br/>__*Optional*__
**host**? | <code>Array<[ContainerHost](#cdktf-provider-docker-containerhost)></code> | host block.<br/>__*Optional*__
**hostname**? | <code>string</code> | Hostname of the container.<br/>__*Optional*__
**init**? | <code>boolean</code> | Configured whether an init process should be injected for this container.<br/>__*Optional*__
**ipcMode**? | <code>string</code> | IPC sharing mode for the container. Possible values are: `none`, `private`, `shareable`, `container:<name|id>` or `host`.<br/>__*Optional*__
**labels**? | <code>Array<[ContainerLabels](#cdktf-provider-docker-containerlabels)></code> | labels block.<br/>__*Optional*__
**lifecycle**?🔹 | <code>[TerraformResourceLifecycle](#cdktf-terraformresourcelifecycle)</code> | __*Optional*__
**links**? | <code>Array<string></code> | Set of links for link based connectivity between containers that are running on the same host.<br/>__*Optional*__
**logDriver**? | <code>string</code> | The logging driver to use for the container. Defaults to `json-file`.<br/>__*Optional*__
**logOpts**? | <code>Map<string, string></code> | Key/value pairs to use as options for the logging driver.<br/>__*Optional*__
**logs**? | <code>boolean</code> | Save the container logs (`attach` must be enabled). Defaults to `false`.<br/>__*Optional*__
**maxRetryCount**? | <code>number</code> | The maximum amount of times to an attempt a restart when `restart` is set to 'on-failure'.<br/>__*Optional*__
**memory**? | <code>number</code> | The memory limit for the container in MBs.<br/>__*Optional*__
**memorySwap**? | <code>number</code> | The total memory limit (memory + swap) for the container in MBs.<br/>__*Optional*__
**mounts**? | <code>Array<[ContainerMounts](#cdktf-provider-docker-containermounts)></code> | mounts block.<br/>__*Optional*__
**mustRun**? | <code>boolean</code> | If `true`, then the Docker container will be kept running.<br/>__*Optional*__
**networkAlias**? | <code>Array<string></code> | Set an alias for the container in all specified networks.<br/>__*Optional*__
**networkMode**? | <code>string</code> | Network mode of the container.<br/>__*Optional*__
**networks**? | <code>Array<string></code> | ID of the networks in which the container is.<br/>__*Optional*__
**networksAdvanced**? | <code>Array<[ContainerNetworksAdvanced](#cdktf-provider-docker-containernetworksadvanced)></code> | networks_advanced block.<br/>__*Optional*__
**pidMode**? | <code>string</code> | he PID (Process) Namespace mode for the container. Either `container:<name|id>` or `host`.<br/>__*Optional*__
**ports**? | <code>Array<[ContainerPorts](#cdktf-provider-docker-containerports)></code> | ports block.<br/>__*Optional*__
**privileged**? | <code>boolean</code> | If `true`, the container runs in privileged mode.<br/>__*Optional*__
**provider**?🔹 | <code>[TerraformProvider](#cdktf-terraformprovider)</code> | __*Optional*__
**publishAllPorts**? | <code>boolean</code> | Publish all ports of the container.<br/>__*Optional*__
**readOnly**? | <code>boolean</code> | If `true`, the container will be started as readonly. Defaults to `false`.<br/>__*Optional*__
**removeVolumes**? | <code>boolean</code> | If `true`, it will remove anonymous volumes associated with the container. Defaults to `true`.<br/>__*Optional*__
**restart**? | <code>string</code> | The restart policy for the container. Must be one of 'no', 'on-failure', 'always', 'unless-stopped'. Defaults to `no`.<br/>__*Optional*__
**rm**? | <code>boolean</code> | If `true`, then the container will be automatically removed after his execution.<br/>__*Optional*__
**securityOpts**? | <code>Array<string></code> | List of string values to customize labels for MLS systems, such as SELinux. See https://docs.docker.com/engine/reference/run/#security-configuration.<br/>__*Optional*__
**shmSize**? | <code>number</code> | Size of `/dev/shm` in MBs.<br/>__*Optional*__
**start**? | <code>boolean</code> | If `true`, then the Docker container will be started after creation.<br/>__*Optional*__
**stdinOpen**? | <code>boolean</code> | If `true`, keep STDIN open even if not attached (`docker run -i`). Defaults to `false`.<br/>__*Optional*__
**sysctls**? | <code>Map<string, string></code> | A map of kernel parameters (sysctls) to set in the container.<br/>__*Optional*__
**tmpfs**? | <code>Map<string, string></code> | A map of container directories which should be replaced by `tmpfs mounts`, and their corresponding mount options.<br/>__*Optional*__
**tty**? | <code>boolean</code> | If `true`, allocate a pseudo-tty (`docker run -t`). Defaults to `false`.<br/>__*Optional*__
**ulimit**? | <code>Array<[ContainerUlimit](#cdktf-provider-docker-containerulimit)></code> | ulimit block.<br/>__*Optional*__
**upload**? | <code>Array<[ContainerUpload](#cdktf-provider-docker-containerupload)></code> | upload block.<br/>__*Optional*__
**user**? | <code>string</code> | User used for run the first process.<br/>__*Optional*__
**usernsMode**? | <code>string</code> | Sets the usernamespace mode for the container when usernamespace remapping option is enabled.<br/>__*Optional*__
**volumes**? | <code>Array<[ContainerVolumes](#cdktf-provider-docker-containervolumes)></code> | volumes block.<br/>__*Optional*__
**workingDir**? | <code>string</code> | The working directory for commands to run in.<br/>__*Optional*__



## struct ContainerDevices  <a id="cdktf-provider-docker-containerdevices"></a>






Name | Type | Description 
-----|------|-------------
**hostPath** | <code>string</code> | The path on the host where the device is located.
**containerPath**? | <code>string</code> | The path in the container where the device will be bound.<br/>__*Optional*__
**permissions**? | <code>string</code> | The cgroup permissions given to the container to access the device. Defaults to `rwm`.<br/>__*Optional*__



## struct ContainerHealthcheck  <a id="cdktf-provider-docker-containerhealthcheck"></a>






Name | Type | Description 
-----|------|-------------
**test** | <code>Array<string></code> | Command to run to check health.
**interval**? | <code>string</code> | Time between running the check (ms|s|m|h). Defaults to `0s`.<br/>__*Optional*__
**retries**? | <code>number</code> | Consecutive failures needed to report unhealthy. Defaults to `0`.<br/>__*Optional*__
**startPeriod**? | <code>string</code> | Start period for the container to initialize before counting retries towards unstable (ms|s|m|h). Defaults to `0s`.<br/>__*Optional*__
**timeout**? | <code>string</code> | Maximum time to allow one check to run (ms|s|m|h). Defaults to `0s`.<br/>__*Optional*__



## struct ContainerHost  <a id="cdktf-provider-docker-containerhost"></a>






Name | Type | Description 
-----|------|-------------
**host** | <code>string</code> | Hostname to add.
**ip** | <code>string</code> | IP address this hostname should resolve to.



## struct ContainerLabels  <a id="cdktf-provider-docker-containerlabels"></a>






Name | Type | Description 
-----|------|-------------
**label** | <code>string</code> | Name of the label.
**value** | <code>string</code> | Value of the label.



## struct ContainerMounts  <a id="cdktf-provider-docker-containermounts"></a>






Name | Type | Description 
-----|------|-------------
**target** | <code>string</code> | Container path.
**type** | <code>string</code> | The mount type.
**bindOptions**? | <code>Array<[ContainerMountsBindOptions](#cdktf-provider-docker-containermountsbindoptions)></code> | bind_options block.<br/>__*Optional*__
**readOnly**? | <code>boolean</code> | Whether the mount should be read-only.<br/>__*Optional*__
**source**? | <code>string</code> | Mount source (e.g. a volume name, a host path).<br/>__*Optional*__
**tmpfsOptions**? | <code>Array<[ContainerMountsTmpfsOptions](#cdktf-provider-docker-containermountstmpfsoptions)></code> | tmpfs_options block.<br/>__*Optional*__
**volumeOptions**? | <code>Array<[ContainerMountsVolumeOptions](#cdktf-provider-docker-containermountsvolumeoptions)></code> | volume_options block.<br/>__*Optional*__



## struct ContainerMountsBindOptions  <a id="cdktf-provider-docker-containermountsbindoptions"></a>






Name | Type | Description 
-----|------|-------------
**propagation**? | <code>string</code> | A propagation mode with the value.<br/>__*Optional*__



## struct ContainerMountsTmpfsOptions  <a id="cdktf-provider-docker-containermountstmpfsoptions"></a>






Name | Type | Description 
-----|------|-------------
**mode**? | <code>number</code> | The permission mode for the tmpfs mount in an integer.<br/>__*Optional*__
**sizeBytes**? | <code>number</code> | The size for the tmpfs mount in bytes.<br/>__*Optional*__



## struct ContainerMountsVolumeOptions  <a id="cdktf-provider-docker-containermountsvolumeoptions"></a>






Name | Type | Description 
-----|------|-------------
**driverName**? | <code>string</code> | Name of the driver to use to create the volume.<br/>__*Optional*__
**driverOptions**? | <code>Map<string, string></code> | key/value map of driver specific options.<br/>__*Optional*__
**labels**? | <code>Array<[ContainerMountsVolumeOptionsLabels](#cdktf-provider-docker-containermountsvolumeoptionslabels)></code> | labels block.<br/>__*Optional*__
**noCopy**? | <code>boolean</code> | Populate volume with data from the target.<br/>__*Optional*__



## struct ContainerMountsVolumeOptionsLabels  <a id="cdktf-provider-docker-containermountsvolumeoptionslabels"></a>






Name | Type | Description 
-----|------|-------------
**label** | <code>string</code> | Name of the label.
**value** | <code>string</code> | Value of the label.



## struct ContainerNetworksAdvanced  <a id="cdktf-provider-docker-containernetworksadvanced"></a>






Name | Type | Description 
-----|------|-------------
**name** | <code>string</code> | The name of the network.
**aliases**? | <code>Array<string></code> | The network aliases of the container in the specific network.<br/>__*Optional*__
**ipv4Address**? | <code>string</code> | The IPV4 address of the container in the specific network.<br/>__*Optional*__
**ipv6Address**? | <code>string</code> | The IPV6 address of the container in the specific network.<br/>__*Optional*__



## struct ContainerPorts  <a id="cdktf-provider-docker-containerports"></a>






Name | Type | Description 
-----|------|-------------
**internal** | <code>number</code> | Port within the container.
**external**? | <code>number</code> | Port exposed out of the container. If not given a free random port `>= 32768` will be used.<br/>__*Optional*__
**ip**? | <code>string</code> | IP address/mask that can access this port. Defaults to `0.0.0.0`.<br/>__*Optional*__
**protocol**? | <code>string</code> | Protocol that can be used over this port. Defaults to `tcp`.<br/>__*Optional*__



## struct ContainerUlimit  <a id="cdktf-provider-docker-containerulimit"></a>






Name | Type | Description 
-----|------|-------------
**hard** | <code>number</code> | The hard limit.
**name** | <code>string</code> | The name of the ulimit.
**soft** | <code>number</code> | The soft limit.



## struct ContainerUpload  <a id="cdktf-provider-docker-containerupload"></a>






Name | Type | Description 
-----|------|-------------
**file** | <code>string</code> | Path to the file in the container where is upload goes to.
**content**? | <code>string</code> | Literal string value to use as the object content, which will be uploaded as UTF-8-encoded text.<br/>__*Optional*__
**contentBase64**? | <code>string</code> | Base64-encoded data that will be decoded and uploaded as raw bytes for the object content.<br/>__*Optional*__
**executable**? | <code>boolean</code> | If `true`, the file will be uploaded with user executable permission. Defaults to `false`.<br/>__*Optional*__
**source**? | <code>string</code> | A filename that references a file which will be uploaded as the object content.<br/>__*Optional*__
**sourceHash**? | <code>string</code> | If using `source`, this will force an update if the file content has updated but the filename has not.<br/>__*Optional*__



## struct ContainerVolumes  <a id="cdktf-provider-docker-containervolumes"></a>






Name | Type | Description 
-----|------|-------------
**containerPath**? | <code>string</code> | The path in the container where the volume will be mounted.<br/>__*Optional*__
**fromContainer**? | <code>string</code> | The container where the volume is coming from.<br/>__*Optional*__
**hostPath**? | <code>string</code> | The path on the host where the volume is coming from.<br/>__*Optional*__
**readOnly**? | <code>boolean</code> | If `true`, this volume will be readonly. Defaults to `false`.<br/>__*Optional*__
**volumeName**? | <code>string</code> | The name of the docker volume which should be mounted.<br/>__*Optional*__



## struct DataDockerImageConfig  <a id="cdktf-provider-docker-datadockerimageconfig"></a>






Name | Type | Description 
-----|------|-------------
**name** | <code>string</code> | The name of the Docker image, including any tags or SHA256 repo digests.
**count**?🔹 | <code>number</code> | __*Optional*__
**dependsOn**?🔹 | <code>Array<[ITerraformDependable](#cdktf-iterraformdependable)></code> | __*Optional*__
**lifecycle**?🔹 | <code>[TerraformResourceLifecycle](#cdktf-terraformresourcelifecycle)</code> | __*Optional*__
**provider**?🔹 | <code>[TerraformProvider](#cdktf-terraformprovider)</code> | __*Optional*__



## struct DataDockerNetworkConfig  <a id="cdktf-provider-docker-datadockernetworkconfig"></a>






Name | Type | Description 
-----|------|-------------
**name** | <code>string</code> | The name of the Docker network.
**count**?🔹 | <code>number</code> | __*Optional*__
**dependsOn**?🔹 | <code>Array<[ITerraformDependable](#cdktf-iterraformdependable)></code> | __*Optional*__
**lifecycle**?🔹 | <code>[TerraformResourceLifecycle](#cdktf-terraformresourcelifecycle)</code> | __*Optional*__
**provider**?🔹 | <code>[TerraformProvider](#cdktf-terraformprovider)</code> | __*Optional*__



## struct DataDockerPluginConfig  <a id="cdktf-provider-docker-datadockerpluginconfig"></a>






Name | Type | Description 
-----|------|-------------
**alias**? | <code>string</code> | The alias of the Docker plugin. If the tag is omitted, `:latest` is complemented to the attribute value.<br/>__*Optional*__
**count**?🔹 | <code>number</code> | __*Optional*__
**dependsOn**?🔹 | <code>Array<[ITerraformDependable](#cdktf-iterraformdependable)></code> | __*Optional*__
**id**? | <code>string</code> | The ID of the plugin, which has precedence over the `alias` of both are given.<br/>__*Optional*__
**lifecycle**?🔹 | <code>[TerraformResourceLifecycle](#cdktf-terraformresourcelifecycle)</code> | __*Optional*__
**provider**?🔹 | <code>[TerraformProvider](#cdktf-terraformprovider)</code> | __*Optional*__



## struct DataDockerRegistryImageConfig  <a id="cdktf-provider-docker-datadockerregistryimageconfig"></a>






Name | Type | Description 
-----|------|-------------
**name** | <code>string</code> | The name of the Docker image, including any tags. e.g. `alpine:latest`.
**count**?🔹 | <code>number</code> | __*Optional*__
**dependsOn**?🔹 | <code>Array<[ITerraformDependable](#cdktf-iterraformdependable)></code> | __*Optional*__
**insecureSkipVerify**? | <code>boolean</code> | If `true`, the verification of TLS certificates of the server/registry is disabled. Defaults to `false`.<br/>__*Optional*__
**lifecycle**?🔹 | <code>[TerraformResourceLifecycle](#cdktf-terraformresourcelifecycle)</code> | __*Optional*__
**provider**?🔹 | <code>[TerraformProvider](#cdktf-terraformprovider)</code> | __*Optional*__



## struct DockerProviderConfig  <a id="cdktf-provider-docker-dockerproviderconfig"></a>






Name | Type | Description 
-----|------|-------------
**alias**? | <code>string</code> | Alias name.<br/>__*Optional*__
**caMaterial**? | <code>string</code> | PEM-encoded content of Docker host CA certificate.<br/>__*Optional*__
**certMaterial**? | <code>string</code> | PEM-encoded content of Docker client certificate.<br/>__*Optional*__
**certPath**? | <code>string</code> | Path to directory with Docker TLS config.<br/>__*Optional*__
**host**? | <code>string</code> | The Docker daemon address.<br/>__*Optional*__
**keyMaterial**? | <code>string</code> | PEM-encoded content of Docker client private key.<br/>__*Optional*__
**registryAuth**? | <code>Array<[DockerProviderRegistryAuth](#cdktf-provider-docker-dockerproviderregistryauth)></code> | registry_auth block.<br/>__*Optional*__



## struct DockerProviderRegistryAuth  <a id="cdktf-provider-docker-dockerproviderregistryauth"></a>






Name | Type | Description 
-----|------|-------------
**address** | <code>string</code> | Address of the registry.
**configFile**? | <code>string</code> | Path to docker json file for registry auth.<br/>__*Optional*__
**configFileContent**? | <code>string</code> | Plain content of the docker json file for registry auth.<br/>__*Optional*__
**password**? | <code>string</code> | Password for the registry.<br/>__*Optional*__
**username**? | <code>string</code> | Username for the registry.<br/>__*Optional*__



## struct ImageBuild  <a id="cdktf-provider-docker-imagebuild"></a>






Name | Type | Description 
-----|------|-------------
**path** | <code>string</code> | Context path.
**buildArg**? | <code>Map<string, string></code> | Set build-time variables.<br/>__*Optional*__
**dockerfile**? | <code>string</code> | Name of the Dockerfile. Defaults to `Dockerfile`.<br/>__*Optional*__
**forceRemove**? | <code>boolean</code> | Always remove intermediate containers.<br/>__*Optional*__
**label**? | <code>Map<string, string></code> | Set metadata for an image.<br/>__*Optional*__
**noCache**? | <code>boolean</code> | Do not use cache when building the image.<br/>__*Optional*__
**remove**? | <code>boolean</code> | Remove intermediate containers after a successful build. Defaults to  `true`.<br/>__*Optional*__
**tag**? | <code>Array<string></code> | Name and optionally a tag in the 'name:tag' format.<br/>__*Optional*__
**target**? | <code>string</code> | Set the target build stage to build.<br/>__*Optional*__



## struct ImageConfig  <a id="cdktf-provider-docker-imageconfig"></a>






Name | Type | Description 
-----|------|-------------
**name** | <code>string</code> | The name of the Docker image, including any tags or SHA256 repo digests.
**buildAttribute**? | <code>Array<[ImageBuild](#cdktf-provider-docker-imagebuild)></code> | build block.<br/>__*Optional*__
**count**?🔹 | <code>number</code> | __*Optional*__
**dependsOn**?🔹 | <code>Array<[ITerraformDependable](#cdktf-iterraformdependable)></code> | __*Optional*__
**forceRemove**? | <code>boolean</code> | If true, then the image is removed forcibly when the resource is destroyed.<br/>__*Optional*__
**keepLocally**? | <code>boolean</code> | If true, then the Docker image won't be deleted on destroy operation.<br/>__*Optional*__
**lifecycle**?🔹 | <code>[TerraformResourceLifecycle](#cdktf-terraformresourcelifecycle)</code> | __*Optional*__
**provider**?🔹 | <code>[TerraformProvider](#cdktf-terraformprovider)</code> | __*Optional*__
**pullTrigger**? | <code>string</code> | A value which cause an image pull when changed.<br/>__*Optional*__
**pullTriggers**? | <code>Array<string></code> | List of values which cause an image pull when changed.<br/>__*Optional*__



## struct NetworkConfig  <a id="cdktf-provider-docker-networkconfig"></a>






Name | Type | Description 
-----|------|-------------
**name** | <code>string</code> | The name of the Docker network.
**attachable**? | <code>boolean</code> | Enable manual container attachment to the network.<br/>__*Optional*__
**checkDuplicate**? | <code>boolean</code> | Requests daemon to check for networks with same name.<br/>__*Optional*__
**count**?🔹 | <code>number</code> | __*Optional*__
**dependsOn**?🔹 | <code>Array<[ITerraformDependable](#cdktf-iterraformdependable)></code> | __*Optional*__
**driver**? | <code>string</code> | The driver of the Docker network. Possible values are `bridge`, `host`, `overlay`, `macvlan`. See [network docs](https://docs.docker.com/network/#network-drivers) for more details.<br/>__*Optional*__
**ingress**? | <code>boolean</code> | Create swarm routing-mesh network. Defaults to `false`.<br/>__*Optional*__
**internal**? | <code>boolean</code> | Whether the network is internal.<br/>__*Optional*__
**ipamConfig**? | <code>Array<[NetworkIpamConfig](#cdktf-provider-docker-networkipamconfig)></code> | ipam_config block.<br/>__*Optional*__
**ipamDriver**? | <code>string</code> | Driver used by the custom IP scheme of the network. Defaults to `default`.<br/>__*Optional*__
**ipv6**? | <code>boolean</code> | Enable IPv6 networking. Defaults to `false`.<br/>__*Optional*__
**labels**? | <code>Array<[NetworkLabels](#cdktf-provider-docker-networklabels)></code> | labels block.<br/>__*Optional*__
**lifecycle**?🔹 | <code>[TerraformResourceLifecycle](#cdktf-terraformresourcelifecycle)</code> | __*Optional*__
**options**? | <code>Map<string, string></code> | Only available with bridge networks. See [bridge options docs](https://docs.docker.com/engine/reference/commandline/network_create/#bridge-driver-options) for more details.<br/>__*Optional*__
**provider**?🔹 | <code>[TerraformProvider](#cdktf-terraformprovider)</code> | __*Optional*__



## struct NetworkIpamConfig  <a id="cdktf-provider-docker-networkipamconfig"></a>






Name | Type | Description 
-----|------|-------------
**auxAddress**? | <code>Map<string, string></code> | Auxiliary IPv4 or IPv6 addresses used by Network driver.<br/>__*Optional*__
**gateway**? | <code>string</code> | The IP address of the gateway.<br/>__*Optional*__
**ipRange**? | <code>string</code> | The ip range in CIDR form.<br/>__*Optional*__
**subnet**? | <code>string</code> | The subnet in CIDR form.<br/>__*Optional*__



## struct NetworkLabels  <a id="cdktf-provider-docker-networklabels"></a>






Name | Type | Description 
-----|------|-------------
**label** | <code>string</code> | Name of the label.
**value** | <code>string</code> | Value of the label.



## struct PluginConfig  <a id="cdktf-provider-docker-pluginconfig"></a>






Name | Type | Description 
-----|------|-------------
**name** | <code>string</code> | Docker Plugin name.
**alias**? | <code>string</code> | Docker Plugin alias.<br/>__*Optional*__
**count**?🔹 | <code>number</code> | __*Optional*__
**dependsOn**?🔹 | <code>Array<[ITerraformDependable](#cdktf-iterraformdependable)></code> | __*Optional*__
**enableTimeout**? | <code>number</code> | HTTP client timeout to enable the plugin.<br/>__*Optional*__
**enabled**? | <code>boolean</code> | If `true` the plugin is enabled. Defaults to `true`.<br/>__*Optional*__
**env**? | <code>Array<string></code> | The environment variables in the form of `KEY=VALUE`, e.g. `DEBUG=0`.<br/>__*Optional*__
**forceDestroy**? | <code>boolean</code> | If true, then the plugin is destroyed forcibly.<br/>__*Optional*__
**forceDisable**? | <code>boolean</code> | If true, then the plugin is disabled forcibly.<br/>__*Optional*__
**grantAllPermissions**? | <code>boolean</code> | If true, grant all permissions necessary to run the plugin.<br/>__*Optional*__
**grantPermissions**? | <code>Array<[PluginGrantPermissions](#cdktf-provider-docker-plugingrantpermissions)></code> | grant_permissions block.<br/>__*Optional*__
**lifecycle**?🔹 | <code>[TerraformResourceLifecycle](#cdktf-terraformresourcelifecycle)</code> | __*Optional*__
**provider**?🔹 | <code>[TerraformProvider](#cdktf-terraformprovider)</code> | __*Optional*__



## struct PluginGrantPermissions  <a id="cdktf-provider-docker-plugingrantpermissions"></a>






Name | Type | Description 
-----|------|-------------
**name** | <code>string</code> | The name of the permission.
**value** | <code>Array<string></code> | The value of the permission.



## struct RegistryImageBuild  <a id="cdktf-provider-docker-registryimagebuild"></a>






Name | Type | Description 
-----|------|-------------
**context** | <code>string</code> | The absolute path to the context folder. You can use the helper function '${path.cwd}/context-dir'.
**authConfig**? | <code>Array<[RegistryImageBuildAuthConfig](#cdktf-provider-docker-registryimagebuildauthconfig)></code> | auth_config block.<br/>__*Optional*__
**buildArgs**? | <code>Map<string, string></code> | Pairs for build-time variables in the form TODO.<br/>__*Optional*__
**buildId**? | <code>string</code> | BuildID is an optional identifier that can be passed together with the build request. The.<br/>__*Optional*__
**cacheFrom**? | <code>Array<string></code> | Images to consider as cache sources.<br/>__*Optional*__
**cgroupParent**? | <code>string</code> | Optional parent cgroup for the container.<br/>__*Optional*__
**cpuPeriod**? | <code>number</code> | The length of a CPU period in microseconds.<br/>__*Optional*__
**cpuQuota**? | <code>number</code> | Microseconds of CPU time that the container can get in a CPU period.<br/>__*Optional*__
**cpuSetCpus**? | <code>string</code> | CPUs in which to allow execution (e.g., `0-3`, `0`, `1`).<br/>__*Optional*__
**cpuSetMems**? | <code>string</code> | MEMs in which to allow execution (`0-3`, `0`, `1`).<br/>__*Optional*__
**cpuShares**? | <code>number</code> | CPU shares (relative weight).<br/>__*Optional*__
**dockerfile**? | <code>string</code> | Dockerfile file. Defaults to `Dockerfile`.<br/>__*Optional*__
**extraHosts**? | <code>Array<string></code> | A list of hostnames/IP mappings to add to the container’s /etc/hosts file. Specified in the form ["hostname:IP"].<br/>__*Optional*__
**forceRemove**? | <code>boolean</code> | Always remove intermediate containers.<br/>__*Optional*__
**isolation**? | <code>string</code> | Isolation represents the isolation technology of a container. The supported values are.<br/>__*Optional*__
**labels**? | <code>Map<string, string></code> | User-defined key/value metadata.<br/>__*Optional*__
**memory**? | <code>number</code> | Set memory limit for build.<br/>__*Optional*__
**memorySwap**? | <code>number</code> | Total memory (memory + swap), -1 to enable unlimited swap.<br/>__*Optional*__
**networkMode**? | <code>string</code> | Set the networking mode for the RUN instructions during build.<br/>__*Optional*__
**noCache**? | <code>boolean</code> | Do not use the cache when building the image.<br/>__*Optional*__
**platform**? | <code>string</code> | Set platform if server is multi-platform capable.<br/>__*Optional*__
**pullParent**? | <code>boolean</code> | Attempt to pull the image even if an older image exists locally.<br/>__*Optional*__
**remoteContext**? | <code>string</code> | A Git repository URI or HTTP/HTTPS context URI.<br/>__*Optional*__
**remove**? | <code>boolean</code> | Remove intermediate containers after a successful build (default behavior).<br/>__*Optional*__
**securityOpt**? | <code>Array<string></code> | The security options.<br/>__*Optional*__
**sessionId**? | <code>string</code> | Set an ID for the build session.<br/>__*Optional*__
**shmSize**? | <code>number</code> | Size of /dev/shm in bytes. The size must be greater than 0.<br/>__*Optional*__
**squash**? | <code>boolean</code> | If true the new layers are squashed into a new image with a single new layer.<br/>__*Optional*__
**suppressOutput**? | <code>boolean</code> | Suppress the build output and print image ID on success.<br/>__*Optional*__
**target**? | <code>string</code> | Set the target build stage to build.<br/>__*Optional*__
**ulimit**? | <code>Array<[RegistryImageBuildUlimit](#cdktf-provider-docker-registryimagebuildulimit)></code> | ulimit block.<br/>__*Optional*__
**version**? | <code>string</code> | Version of the unerlying builder to use.<br/>__*Optional*__



## struct RegistryImageBuildAuthConfig  <a id="cdktf-provider-docker-registryimagebuildauthconfig"></a>






Name | Type | Description 
-----|------|-------------
**hostName** | <code>string</code> | hostname of the registry.
**auth**? | <code>string</code> | the auth token.<br/>__*Optional*__
**email**? | <code>string</code> | the user emal.<br/>__*Optional*__
**identityToken**? | <code>string</code> | the identity token.<br/>__*Optional*__
**password**? | <code>string</code> | the registry password.<br/>__*Optional*__
**registryToken**? | <code>string</code> | the registry token.<br/>__*Optional*__
**serverAddress**? | <code>string</code> | the server address.<br/>__*Optional*__
**userName**? | <code>string</code> | the registry user name.<br/>__*Optional*__



## struct RegistryImageBuildUlimit  <a id="cdktf-provider-docker-registryimagebuildulimit"></a>






Name | Type | Description 
-----|------|-------------
**hard** | <code>number</code> | soft limit.
**name** | <code>string</code> | type of ulimit, e.g. `nofile`.
**soft** | <code>number</code> | hard limit.



## struct RegistryImageConfig  <a id="cdktf-provider-docker-registryimageconfig"></a>






Name | Type | Description 
-----|------|-------------
**name** | <code>string</code> | The name of the Docker image.
**buildAttribute**? | <code>Array<[RegistryImageBuild](#cdktf-provider-docker-registryimagebuild)></code> | build block.<br/>__*Optional*__
**count**?🔹 | <code>number</code> | __*Optional*__
**dependsOn**?🔹 | <code>Array<[ITerraformDependable](#cdktf-iterraformdependable)></code> | __*Optional*__
**insecureSkipVerify**? | <code>boolean</code> | If `true`, the verification of TLS certificates of the server/registry is disabled. Defaults to `false`.<br/>__*Optional*__
**keepRemotely**? | <code>boolean</code> | If true, then the Docker image won't be deleted on destroy operation.<br/>__*Optional*__
**lifecycle**?🔹 | <code>[TerraformResourceLifecycle](#cdktf-terraformresourcelifecycle)</code> | __*Optional*__
**provider**?🔹 | <code>[TerraformProvider](#cdktf-terraformprovider)</code> | __*Optional*__



## struct SecretConfig  <a id="cdktf-provider-docker-secretconfig"></a>






Name | Type | Description 
-----|------|-------------
**data** | <code>string</code> | Base64-url-safe-encoded secret data.
**name** | <code>string</code> | User-defined name of the secret.
**count**?🔹 | <code>number</code> | __*Optional*__
**dependsOn**?🔹 | <code>Array<[ITerraformDependable](#cdktf-iterraformdependable)></code> | __*Optional*__
**labels**? | <code>Array<[SecretLabels](#cdktf-provider-docker-secretlabels)></code> | labels block.<br/>__*Optional*__
**lifecycle**?🔹 | <code>[TerraformResourceLifecycle](#cdktf-terraformresourcelifecycle)</code> | __*Optional*__
**provider**?🔹 | <code>[TerraformProvider](#cdktf-terraformprovider)</code> | __*Optional*__



## struct SecretLabels  <a id="cdktf-provider-docker-secretlabels"></a>






Name | Type | Description 
-----|------|-------------
**label** | <code>string</code> | Name of the label.
**value** | <code>string</code> | Value of the label.



## struct ServiceAuth  <a id="cdktf-provider-docker-serviceauth"></a>






Name | Type | Description 
-----|------|-------------
**serverAddress** | <code>string</code> | The address of the server for the authentication.
**password**? | <code>string</code> | The password.<br/>__*Optional*__
**username**? | <code>string</code> | The username.<br/>__*Optional*__



## struct ServiceConfig  <a id="cdktf-provider-docker-serviceconfig"></a>






Name | Type | Description 
-----|------|-------------
**name** | <code>string</code> | Name of the service.
**taskSpec** | <code>Array<[ServiceTaskSpec](#cdktf-provider-docker-servicetaskspec)></code> | task_spec block.
**auth**? | <code>Array<[ServiceAuth](#cdktf-provider-docker-serviceauth)></code> | auth block.<br/>__*Optional*__
**convergeConfig**? | <code>Array<[ServiceConvergeConfig](#cdktf-provider-docker-serviceconvergeconfig)></code> | converge_config block.<br/>__*Optional*__
**count**?🔹 | <code>number</code> | __*Optional*__
**dependsOn**?🔹 | <code>Array<[ITerraformDependable](#cdktf-iterraformdependable)></code> | __*Optional*__
**endpointSpec**? | <code>Array<[ServiceEndpointSpec](#cdktf-provider-docker-serviceendpointspec)></code> | endpoint_spec block.<br/>__*Optional*__
**labels**? | <code>Array<[ServiceLabels](#cdktf-provider-docker-servicelabels)></code> | labels block.<br/>__*Optional*__
**lifecycle**?🔹 | <code>[TerraformResourceLifecycle](#cdktf-terraformresourcelifecycle)</code> | __*Optional*__
**mode**? | <code>Array<[ServiceMode](#cdktf-provider-docker-servicemode)></code> | mode block.<br/>__*Optional*__
**provider**?🔹 | <code>[TerraformProvider](#cdktf-terraformprovider)</code> | __*Optional*__
**rollbackConfig**? | <code>Array<[ServiceRollbackConfig](#cdktf-provider-docker-servicerollbackconfig)></code> | rollback_config block.<br/>__*Optional*__
**updateConfig**? | <code>Array<[ServiceUpdateConfig](#cdktf-provider-docker-serviceupdateconfig)></code> | update_config block.<br/>__*Optional*__



## struct ServiceConvergeConfig  <a id="cdktf-provider-docker-serviceconvergeconfig"></a>






Name | Type | Description 
-----|------|-------------
**delay**? | <code>string</code> | The interval to check if the desired state is reached (ms|s). Defaults to `7s`.<br/>__*Optional*__
**timeout**? | <code>string</code> | The timeout of the service to reach the desired state (s|m). Defaults to `3m`.<br/>__*Optional*__



## struct ServiceEndpointSpec  <a id="cdktf-provider-docker-serviceendpointspec"></a>






Name | Type | Description 
-----|------|-------------
**mode**? | <code>string</code> | The mode of resolution to use for internal load balancing between tasks.<br/>__*Optional*__
**ports**? | <code>Array<[ServiceEndpointSpecPorts](#cdktf-provider-docker-serviceendpointspecports)></code> | ports block.<br/>__*Optional*__



## struct ServiceEndpointSpecPorts  <a id="cdktf-provider-docker-serviceendpointspecports"></a>






Name | Type | Description 
-----|------|-------------
**targetPort** | <code>number</code> | The port inside the container.
**name**? | <code>string</code> | A random name for the port.<br/>__*Optional*__
**protocol**? | <code>string</code> | Rrepresents the protocol of a port: 'tcp', 'udp' or 'sctp'. Defaults to `tcp`.<br/>__*Optional*__
**publishMode**? | <code>string</code> | Represents the mode in which the port is to be published: 'ingress' or 'host'. Defaults to `ingress`.<br/>__*Optional*__
**publishedPort**? | <code>number</code> | The port on the swarm hosts.<br/>__*Optional*__



## struct ServiceLabels  <a id="cdktf-provider-docker-servicelabels"></a>






Name | Type | Description 
-----|------|-------------
**label** | <code>string</code> | Name of the label.
**value** | <code>string</code> | Value of the label.



## struct ServiceMode  <a id="cdktf-provider-docker-servicemode"></a>






Name | Type | Description 
-----|------|-------------
**global**? | <code>boolean</code> | The global service mode. Defaults to `false`.<br/>__*Optional*__
**replicated**? | <code>Array<[ServiceModeReplicated](#cdktf-provider-docker-servicemodereplicated)></code> | replicated block.<br/>__*Optional*__



## struct ServiceModeReplicated  <a id="cdktf-provider-docker-servicemodereplicated"></a>






Name | Type | Description 
-----|------|-------------
**replicas**? | <code>number</code> | The amount of replicas of the service. Defaults to `1`.<br/>__*Optional*__



## struct ServiceRollbackConfig  <a id="cdktf-provider-docker-servicerollbackconfig"></a>






Name | Type | Description 
-----|------|-------------
**delay**? | <code>string</code> | Delay between task rollbacks (ns|us|ms|s|m|h). Defaults to `0s`.<br/>__*Optional*__
**failureAction**? | <code>string</code> | Action on rollback failure: pause | continue. Defaults to `pause`.<br/>__*Optional*__
**maxFailureRatio**? | <code>string</code> | Failure rate to tolerate during a rollback. Defaults to `0.0`.<br/>__*Optional*__
**monitor**? | <code>string</code> | Duration after each task rollback to monitor for failure (ns|us|ms|s|m|h). Defaults to `5s`.<br/>__*Optional*__
**order**? | <code>string</code> | Rollback order: either 'stop-first' or 'start-first'. Defaults to `stop-first`.<br/>__*Optional*__
**parallelism**? | <code>number</code> | Maximum number of tasks to be rollbacked in one iteration. Defaults to `1`.<br/>__*Optional*__



## struct ServiceTaskSpec  <a id="cdktf-provider-docker-servicetaskspec"></a>






Name | Type | Description 
-----|------|-------------
**containerSpec** | <code>Array<[ServiceTaskSpecContainerSpec](#cdktf-provider-docker-servicetaskspeccontainerspec)></code> | container_spec block.
**forceUpdate**? | <code>number</code> | A counter that triggers an update even if no relevant parameters have been changed. See the [spec](https://github.com/docker/swarmkit/blob/master/api/specs.proto#L126).<br/>__*Optional*__
**logDriver**? | <code>Array<[ServiceTaskSpecLogDriver](#cdktf-provider-docker-servicetaskspeclogdriver)></code> | log_driver block.<br/>__*Optional*__
**networks**? | <code>Array<string></code> | Ids of the networks in which the  container will be put in.<br/>__*Optional*__
**placement**? | <code>Array<[ServiceTaskSpecPlacement](#cdktf-provider-docker-servicetaskspecplacement)></code> | placement block.<br/>__*Optional*__
**resources**? | <code>Array<[ServiceTaskSpecResources](#cdktf-provider-docker-servicetaskspecresources)></code> | resources block.<br/>__*Optional*__
**restartPolicy**? | <code>Array<[ServiceTaskSpecRestartPolicy](#cdktf-provider-docker-servicetaskspecrestartpolicy)></code> | restart_policy block.<br/>__*Optional*__
**runtime**? | <code>string</code> | Runtime is the type of runtime specified for the task executor. See the [types](https://github.com/moby/moby/blob/master/api/types/swarm/runtime.go).<br/>__*Optional*__



## struct ServiceTaskSpecContainerSpec  <a id="cdktf-provider-docker-servicetaskspeccontainerspec"></a>






Name | Type | Description 
-----|------|-------------
**image** | <code>string</code> | The image name to use for the containers of the service, like `nginx:1.17.6`. Also use the data-source or resource of `docker_image` with the `repo_digest` or `docker_registry_image` with the `name` attribute for this, as shown in the examples.
**args**? | <code>Array<string></code> | Arguments to the command.<br/>__*Optional*__
**command**? | <code>Array<string></code> | The command/entrypoint to be run in the image.<br/>__*Optional*__
**configs**? | <code>Array<[ServiceTaskSpecContainerSpecConfigs](#cdktf-provider-docker-servicetaskspeccontainerspecconfigs)></code> | configs block.<br/>__*Optional*__
**dir**? | <code>string</code> | The working directory for commands to run in.<br/>__*Optional*__
**dnsConfig**? | <code>Array<[ServiceTaskSpecContainerSpecDnsConfig](#cdktf-provider-docker-servicetaskspeccontainerspecdnsconfig)></code> | dns_config block.<br/>__*Optional*__
**env**? | <code>Map<string, string></code> | A list of environment variables in the form VAR="value".<br/>__*Optional*__
**groups**? | <code>Array<string></code> | A list of additional groups that the container process will run as.<br/>__*Optional*__
**healthcheck**? | <code>Array<[ServiceTaskSpecContainerSpecHealthcheck](#cdktf-provider-docker-servicetaskspeccontainerspechealthcheck)></code> | healthcheck block.<br/>__*Optional*__
**hostname**? | <code>string</code> | The hostname to use for the container, as a valid RFC 1123 hostname.<br/>__*Optional*__
**hosts**? | <code>Array<[ServiceTaskSpecContainerSpecHosts](#cdktf-provider-docker-servicetaskspeccontainerspechosts)></code> | hosts block.<br/>__*Optional*__
**isolation**? | <code>string</code> | Isolation technology of the containers running the service. (Windows only). Defaults to `default`.<br/>__*Optional*__
**labels**? | <code>Array<[ServiceTaskSpecContainerSpecLabels](#cdktf-provider-docker-servicetaskspeccontainerspeclabels)></code> | labels block.<br/>__*Optional*__
**mounts**? | <code>Array<[ServiceTaskSpecContainerSpecMounts](#cdktf-provider-docker-servicetaskspeccontainerspecmounts)></code> | mounts block.<br/>__*Optional*__
**privileges**? | <code>Array<[ServiceTaskSpecContainerSpecPrivileges](#cdktf-provider-docker-servicetaskspeccontainerspecprivileges)></code> | privileges block.<br/>__*Optional*__
**readOnly**? | <code>boolean</code> | Mount the container's root filesystem as read only.<br/>__*Optional*__
**secrets**? | <code>Array<[ServiceTaskSpecContainerSpecSecrets](#cdktf-provider-docker-servicetaskspeccontainerspecsecrets)></code> | secrets block.<br/>__*Optional*__
**stopGracePeriod**? | <code>string</code> | Amount of time to wait for the container to terminate before forcefully removing it (ms|s|m|h).<br/>__*Optional*__
**stopSignal**? | <code>string</code> | Signal to stop the container.<br/>__*Optional*__
**user**? | <code>string</code> | The user inside the container.<br/>__*Optional*__



## struct ServiceTaskSpecContainerSpecConfigs  <a id="cdktf-provider-docker-servicetaskspeccontainerspecconfigs"></a>






Name | Type | Description 
-----|------|-------------
**configId** | <code>string</code> | ID of the specific config that we're referencing.
**fileName** | <code>string</code> | Represents the final filename in the filesystem.
**configName**? | <code>string</code> | Name of the config that this references, but this is just provided for lookup/display purposes.<br/>__*Optional*__
**fileGid**? | <code>string</code> | Represents the file GID. Defaults to `0`.<br/>__*Optional*__
**fileMode**? | <code>number</code> | Represents represents the FileMode of the file. Defaults to `0o444`.<br/>__*Optional*__
**fileUid**? | <code>string</code> | Represents the file UID. Defaults to `0`.<br/>__*Optional*__



## struct ServiceTaskSpecContainerSpecDnsConfig  <a id="cdktf-provider-docker-servicetaskspeccontainerspecdnsconfig"></a>






Name | Type | Description 
-----|------|-------------
**nameservers** | <code>Array<string></code> | The IP addresses of the name servers.
**options**? | <code>Array<string></code> | A list of internal resolver variables to be modified (e.g., debug, ndots:3, etc.).<br/>__*Optional*__
**search**? | <code>Array<string></code> | A search list for host-name lookup.<br/>__*Optional*__



## struct ServiceTaskSpecContainerSpecHealthcheck  <a id="cdktf-provider-docker-servicetaskspeccontainerspechealthcheck"></a>






Name | Type | Description 
-----|------|-------------
**test** | <code>Array<string></code> | The test to perform as list.
**interval**? | <code>string</code> | Time between running the check (ms|s|m|h). Defaults to `0s`.<br/>__*Optional*__
**retries**? | <code>number</code> | Consecutive failures needed to report unhealthy. Defaults to `0`.<br/>__*Optional*__
**startPeriod**? | <code>string</code> | Start period for the container to initialize before counting retries towards unstable (ms|s|m|h). Defaults to `0s`.<br/>__*Optional*__
**timeout**? | <code>string</code> | Maximum time to allow one check to run (ms|s|m|h). Defaults to `0s`.<br/>__*Optional*__



## struct ServiceTaskSpecContainerSpecHosts  <a id="cdktf-provider-docker-servicetaskspeccontainerspechosts"></a>






Name | Type | Description 
-----|------|-------------
**host** | <code>string</code> | The name of the host.
**ip** | <code>string</code> | The ip of the host.



## struct ServiceTaskSpecContainerSpecLabels  <a id="cdktf-provider-docker-servicetaskspeccontainerspeclabels"></a>






Name | Type | Description 
-----|------|-------------
**label** | <code>string</code> | Name of the label.
**value** | <code>string</code> | Value of the label.



## struct ServiceTaskSpecContainerSpecMounts  <a id="cdktf-provider-docker-servicetaskspeccontainerspecmounts"></a>






Name | Type | Description 
-----|------|-------------
**target** | <code>string</code> | Container path.
**type** | <code>string</code> | The mount type.
**bindOptions**? | <code>Array<[ServiceTaskSpecContainerSpecMountsBindOptions](#cdktf-provider-docker-servicetaskspeccontainerspecmountsbindoptions)></code> | bind_options block.<br/>__*Optional*__
**readOnly**? | <code>boolean</code> | Whether the mount should be read-only.<br/>__*Optional*__
**source**? | <code>string</code> | Mount source (e.g. a volume name, a host path).<br/>__*Optional*__
**tmpfsOptions**? | <code>Array<[ServiceTaskSpecContainerSpecMountsTmpfsOptions](#cdktf-provider-docker-servicetaskspeccontainerspecmountstmpfsoptions)></code> | tmpfs_options block.<br/>__*Optional*__
**volumeOptions**? | <code>Array<[ServiceTaskSpecContainerSpecMountsVolumeOptions](#cdktf-provider-docker-servicetaskspeccontainerspecmountsvolumeoptions)></code> | volume_options block.<br/>__*Optional*__



## struct ServiceTaskSpecContainerSpecMountsBindOptions  <a id="cdktf-provider-docker-servicetaskspeccontainerspecmountsbindoptions"></a>






Name | Type | Description 
-----|------|-------------
**propagation**? | <code>string</code> | Bind propagation refers to whether or not mounts created within a given bind-mount or named volume can be propagated to replicas of that mount.<br/>__*Optional*__



## struct ServiceTaskSpecContainerSpecMountsTmpfsOptions  <a id="cdktf-provider-docker-servicetaskspeccontainerspecmountstmpfsoptions"></a>






Name | Type | Description 
-----|------|-------------
**mode**? | <code>number</code> | The permission mode for the tmpfs mount in an integer.<br/>__*Optional*__
**sizeBytes**? | <code>number</code> | The size for the tmpfs mount in bytes.<br/>__*Optional*__



## struct ServiceTaskSpecContainerSpecMountsVolumeOptions  <a id="cdktf-provider-docker-servicetaskspeccontainerspecmountsvolumeoptions"></a>






Name | Type | Description 
-----|------|-------------
**driverName**? | <code>string</code> | Name of the driver to use to create the volume.<br/>__*Optional*__
**driverOptions**? | <code>Map<string, string></code> | key/value map of driver specific options.<br/>__*Optional*__
**labels**? | <code>Array<[ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels](#cdktf-provider-docker-servicetaskspeccontainerspecmountsvolumeoptionslabels)></code> | labels block.<br/>__*Optional*__
**noCopy**? | <code>boolean</code> | Populate volume with data from the target.<br/>__*Optional*__



## struct ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels  <a id="cdktf-provider-docker-servicetaskspeccontainerspecmountsvolumeoptionslabels"></a>






Name | Type | Description 
-----|------|-------------
**label** | <code>string</code> | Name of the label.
**value** | <code>string</code> | Value of the label.



## struct ServiceTaskSpecContainerSpecPrivileges  <a id="cdktf-provider-docker-servicetaskspeccontainerspecprivileges"></a>






Name | Type | Description 
-----|------|-------------
**credentialSpec**? | <code>Array<[ServiceTaskSpecContainerSpecPrivilegesCredentialSpec](#cdktf-provider-docker-servicetaskspeccontainerspecprivilegescredentialspec)></code> | credential_spec block.<br/>__*Optional*__
**seLinuxContext**? | <code>Array<[ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext](#cdktf-provider-docker-servicetaskspeccontainerspecprivilegesselinuxcontext)></code> | se_linux_context block.<br/>__*Optional*__



## struct ServiceTaskSpecContainerSpecPrivilegesCredentialSpec  <a id="cdktf-provider-docker-servicetaskspeccontainerspecprivilegescredentialspec"></a>






Name | Type | Description 
-----|------|-------------
**file**? | <code>string</code> | Load credential spec from this file.<br/>__*Optional*__
**registry**? | <code>string</code> | Load credential spec from this value in the Windows registry.<br/>__*Optional*__



## struct ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext  <a id="cdktf-provider-docker-servicetaskspeccontainerspecprivilegesselinuxcontext"></a>






Name | Type | Description 
-----|------|-------------
**disable**? | <code>boolean</code> | Disable SELinux.<br/>__*Optional*__
**level**? | <code>string</code> | SELinux level label.<br/>__*Optional*__
**role**? | <code>string</code> | SELinux role label.<br/>__*Optional*__
**type**? | <code>string</code> | SELinux type label.<br/>__*Optional*__
**user**? | <code>string</code> | SELinux user label.<br/>__*Optional*__



## struct ServiceTaskSpecContainerSpecSecrets  <a id="cdktf-provider-docker-servicetaskspeccontainerspecsecrets"></a>






Name | Type | Description 
-----|------|-------------
**fileName** | <code>string</code> | Represents the final filename in the filesystem.
**secretId** | <code>string</code> | ID of the specific secret that we're referencing.
**fileGid**? | <code>string</code> | Represents the file GID. Defaults to `0`.<br/>__*Optional*__
**fileMode**? | <code>number</code> | Represents represents the FileMode of the file. Defaults to `0o444`.<br/>__*Optional*__
**fileUid**? | <code>string</code> | Represents the file UID. Defaults to `0`.<br/>__*Optional*__
**secretName**? | <code>string</code> | Name of the secret that this references, but this is just provided for lookup/display purposes.<br/>__*Optional*__



## struct ServiceTaskSpecLogDriver  <a id="cdktf-provider-docker-servicetaskspeclogdriver"></a>






Name | Type | Description 
-----|------|-------------
**name** | <code>string</code> | The logging driver to use.
**options**? | <code>Map<string, string></code> | The options for the logging driver.<br/>__*Optional*__



## struct ServiceTaskSpecPlacement  <a id="cdktf-provider-docker-servicetaskspecplacement"></a>






Name | Type | Description 
-----|------|-------------
**constraints**? | <code>Array<string></code> | An array of constraints. e.g.: `node.role==manager`.<br/>__*Optional*__
**maxReplicas**? | <code>number</code> | Maximum number of replicas for per node (default value is `0`, which is unlimited).<br/>__*Optional*__
**platforms**? | <code>Array<[ServiceTaskSpecPlacementPlatforms](#cdktf-provider-docker-servicetaskspecplacementplatforms)></code> | platforms block.<br/>__*Optional*__
**prefs**? | <code>Array<string></code> | Preferences provide a way to make the scheduler aware of factors such as topology.<br/>__*Optional*__



## struct ServiceTaskSpecPlacementPlatforms  <a id="cdktf-provider-docker-servicetaskspecplacementplatforms"></a>






Name | Type | Description 
-----|------|-------------
**architecture** | <code>string</code> | The architecture, e.g. `amd64`.
**os** | <code>string</code> | The operation system, e.g. `linux`.



## struct ServiceTaskSpecResources  <a id="cdktf-provider-docker-servicetaskspecresources"></a>






Name | Type | Description 
-----|------|-------------
**limits**? | <code>Array<[ServiceTaskSpecResourcesLimits](#cdktf-provider-docker-servicetaskspecresourceslimits)></code> | limits block.<br/>__*Optional*__
**reservation**? | <code>Array<[ServiceTaskSpecResourcesReservation](#cdktf-provider-docker-servicetaskspecresourcesreservation)></code> | reservation block.<br/>__*Optional*__



## struct ServiceTaskSpecResourcesLimits  <a id="cdktf-provider-docker-servicetaskspecresourceslimits"></a>






Name | Type | Description 
-----|------|-------------
**memoryBytes**? | <code>number</code> | The amounf of memory in bytes the container allocates.<br/>__*Optional*__
**nanoCpus**? | <code>number</code> | CPU shares in units of `1/1e9` (or `10^-9`) of the CPU. Should be at least 1000000.<br/>__*Optional*__



## struct ServiceTaskSpecResourcesReservation  <a id="cdktf-provider-docker-servicetaskspecresourcesreservation"></a>






Name | Type | Description 
-----|------|-------------
**genericResources**? | <code>Array<[ServiceTaskSpecResourcesReservationGenericResources](#cdktf-provider-docker-servicetaskspecresourcesreservationgenericresources)></code> | generic_resources block.<br/>__*Optional*__
**memoryBytes**? | <code>number</code> | The amounf of memory in bytes the container allocates.<br/>__*Optional*__
**nanoCpus**? | <code>number</code> | CPU shares in units of 1/1e9 (or 10^-9) of the CPU. Should be at least 1000000.<br/>__*Optional*__



## struct ServiceTaskSpecResourcesReservationGenericResources  <a id="cdktf-provider-docker-servicetaskspecresourcesreservationgenericresources"></a>






Name | Type | Description 
-----|------|-------------
**discreteResourcesSpec**? | <code>Array<string></code> | The Integer resources.<br/>__*Optional*__
**namedResourcesSpec**? | <code>Array<string></code> | The String resources.<br/>__*Optional*__



## struct ServiceTaskSpecRestartPolicy  <a id="cdktf-provider-docker-servicetaskspecrestartpolicy"></a>






Name | Type | Description 
-----|------|-------------
**condition**? | <code>string</code> | Condition for restart.<br/>__*Optional*__
**delay**? | <code>string</code> | Delay between restart attempts (ms|s|m|h).<br/>__*Optional*__
**maxAttempts**? | <code>number</code> | Maximum attempts to restart a given container before giving up (default value is `0`, which is ignored).<br/>__*Optional*__
**window**? | <code>string</code> | The time window used to evaluate the restart policy (default value is `0`, which is unbounded) (ms|s|m|h).<br/>__*Optional*__



## struct ServiceUpdateConfig  <a id="cdktf-provider-docker-serviceupdateconfig"></a>






Name | Type | Description 
-----|------|-------------
**delay**? | <code>string</code> | Delay between task updates (ns|us|ms|s|m|h). Defaults to `0s`.<br/>__*Optional*__
**failureAction**? | <code>string</code> | Action on update failure: pause | continue | rollback. Defaults to `pause`.<br/>__*Optional*__
**maxFailureRatio**? | <code>string</code> | Failure rate to tolerate during an update. Defaults to `0.0`.<br/>__*Optional*__
**monitor**? | <code>string</code> | Duration after each task update to monitor for failure (ns|us|ms|s|m|h). Defaults to `5s`.<br/>__*Optional*__
**order**? | <code>string</code> | Update order: either 'stop-first' or 'start-first'. Defaults to `stop-first`.<br/>__*Optional*__
**parallelism**? | <code>number</code> | Maximum number of tasks to be updated in one iteration. Defaults to `1`.<br/>__*Optional*__



## struct VolumeConfig  <a id="cdktf-provider-docker-volumeconfig"></a>






Name | Type | Description 
-----|------|-------------
**count**?🔹 | <code>number</code> | __*Optional*__
**dependsOn**?🔹 | <code>Array<[ITerraformDependable](#cdktf-iterraformdependable)></code> | __*Optional*__
**driver**? | <code>string</code> | Driver type for the volume. Defaults to `local`.<br/>__*Optional*__
**driverOpts**? | <code>Map<string, string></code> | Options specific to the driver.<br/>__*Optional*__
**labels**? | <code>Array<[VolumeLabels](#cdktf-provider-docker-volumelabels)></code> | labels block.<br/>__*Optional*__
**lifecycle**?🔹 | <code>[TerraformResourceLifecycle](#cdktf-terraformresourcelifecycle)</code> | __*Optional*__
**name**? | <code>string</code> | The name of the Docker volume (will be generated if not provided).<br/>__*Optional*__
**provider**?🔹 | <code>[TerraformProvider](#cdktf-terraformprovider)</code> | __*Optional*__



## struct VolumeLabels  <a id="cdktf-provider-docker-volumelabels"></a>






Name | Type | Description 
-----|------|-------------
**label** | <code>string</code> | Name of the label.
**value** | <code>string</code> | Value of the label.



